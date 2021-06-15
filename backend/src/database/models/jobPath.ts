import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const jobPath = sequelize.define(
    'jobPath',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      jobName: {
        type: DataTypes.TEXT,
      },
      promotionIndicators: {
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

  jobPath.associate = (models) => {



    
    models.jobPath.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.jobPath.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.jobPath.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return jobPath;
}
