import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const candidates = sequelize.define(
    'candidates',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      candidateName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [2, 255],
          notEmpty: true,
        }
      },
      candidateReference: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      gender: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "ذكر",
            "أنثى"
          ]],
        }
      },
      currentCompany: {
        type: DataTypes.TEXT,
      },
      noticePeriod: {
        type: DataTypes.INTEGER,
      },
      currentSalary: {
        type: DataTypes.INTEGER,
      },
      expectedSalary: {
        type: DataTypes.INTEGER,
      },
      candidateCreatedDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('candidateCreatedDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('candidateCreatedDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      tactLevel: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "عالي",
            "عادي"
          ]],
        }
      },
      yearsExperience: {
        type: DataTypes.INTEGER,
        validate: {
          max: 30,
        }
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,    
        validate: {
          len: [0, 255],
        },    
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  candidates.associate = (models) => {
    models.candidates.belongsTo(models.jobs, {
      as: 'currentPosition',
      constraints: false,
    });

    models.candidates.belongsTo(models.academicCertificates, {
      as: 'academicCertificateSpecialization',
      constraints: false,
    });

    models.candidates.belongsTo(models.trainingCertificates, {
      as: 'trainingCertificates',
      constraints: false,
    });

    models.candidates.belongsTo(models.softSkills, {
      as: 'softSkills',
      constraints: false,
    });

    models.candidates.belongsTo(models.managementSkills, {
      as: 'managementSkills',
      constraints: false,
    });

    models.candidates.belongsTo(models.artisticSkills, {
      as: 'artisticSkills',
      constraints: false,
    });

    models.candidates.belongsTo(models.jobs, {
      as: 'jobs',
      constraints: false,
    });

    models.candidates.hasMany(models.file, {
      as: 'resume',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.candidates.getTableName(),
        belongsToColumn: 'resume',
      },
    });

    models.candidates.hasMany(models.file, {
      as: 'photo',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.candidates.getTableName(),
        belongsToColumn: 'photo',
      },
    });
    
    models.candidates.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.candidates.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.candidates.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return candidates;
}
