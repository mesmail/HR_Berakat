import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const tasksDuties = sequelize.define(
    'tasksDuties',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      tasksDuties: {
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

  tasksDuties.associate = (models) => {



    
    models.tasksDuties.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.tasksDuties.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.tasksDuties.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return tasksDuties;
}
