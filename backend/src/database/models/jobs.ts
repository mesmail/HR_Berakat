import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const jobs = sequelize.define(
    'jobs',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      positionName: {
        type: DataTypes.TEXT,
      },
      jobLocation: {
        type: DataTypes.TEXT,
      },
      jobCode: {
        type: DataTypes.TEXT,
      },
      generalDescription: {
        type: DataTypes.TEXT,
      },
      generalGoals: {
        type: DataTypes.TEXT,
      },
      detailedGoals: {
        type: DataTypes.TEXT,
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

  jobs.associate = (models) => {
    models.jobs.belongsToMany(models.departments, {
      as: 'department',
      constraints: false,
      through: 'jobsDepartmentDepartments',
    });

    models.jobs.belongsTo(models.user, {
      as: 'supervisor',
      constraints: false,
    });

    models.jobs.belongsTo(models.academicCertificates, {
      as: 'academicCertificates',
      constraints: false,
    });

    models.jobs.belongsTo(models.trainingCertificates, {
      as: 'trainingCertificates',
      constraints: false,
    });

    models.jobs.belongsTo(models.professionalCertifications, {
      as: 'professionalCertificates',
      constraints: false,
    });

    models.jobs.belongsTo(models.softSkills, {
      as: 'softSkills',
      constraints: false,
    });

    models.jobs.belongsTo(models.managementSkills, {
      as: 'managementSkills',
      constraints: false,
    });

    models.jobs.belongsTo(models.artisticSkills, {
      as: 'artitistikSkills',
      constraints: false,
    });

    models.jobs.belongsTo(models.jobFrameworks, {
      as: 'jobFramework',
      constraints: false,
    });

    models.jobs.belongsTo(models.connectionLevel, {
      as: 'connectionLevel',
      constraints: false,
    });

    models.jobs.belongsToMany(models.commonComitees, {
      as: 'commonCommittees',
      constraints: false,
      through: 'jobsCommonCommitteesCommonComitees',
    });

    models.jobs.belongsTo(models.jobRequirments, {
      as: 'jobRequirments',
      constraints: false,
    });

    models.jobs.belongsTo(models.jobPath, {
      as: 'jobPath',
      constraints: false,
    });

    models.jobs.belongsTo(models.tasksDuties, {
      as: 'tasksDuties',
      constraints: false,
    });

    models.jobs.belongsTo(models.administrativeFinancialPowers, {
      as: 'administrativeFinancialPowers',
      constraints: false,
    });

    models.jobs.belongsTo(models.cardInformation, {
      as: 'cardInformation',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.jobs.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.jobs.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.jobs.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return jobs;
}
