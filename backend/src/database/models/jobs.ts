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
      releaseDate: {
        type: DataTypes.DATE,
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
    models.jobs.belongsTo(models.departments, {
      as: 'department',
      constraints: false,
    });

    models.jobs.belongsTo(models.user, {
      as: 'supervisor',
      constraints: false,
    });

    models.jobs.belongsTo(models.softSkills, {
      as: 'personalAndTechnicalSkills',
      constraints: false,
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
