import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const jobFrameworks = sequelize.define(
    'jobFrameworks',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      takeMultipleTasks: {
        type: DataTypes.TEXT,
      },
      impactSalary: {
        type: DataTypes.TEXT,
      },
      impactJobGrade: {
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

  jobFrameworks.associate = (models) => {



    
    models.jobFrameworks.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.jobFrameworks.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.jobFrameworks.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return jobFrameworks;
}
