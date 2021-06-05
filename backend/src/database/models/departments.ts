import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const departments = sequelize.define(
    'departments',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      departmentName: {
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

  departments.associate = (models) => {



    
    models.departments.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.departments.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.departments.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return departments;
}
