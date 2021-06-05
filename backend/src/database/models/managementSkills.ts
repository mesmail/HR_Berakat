import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const managementSkills = sequelize.define(
    'managementSkills',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      managementSkills: {
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

  managementSkills.associate = (models) => {



    
    models.managementSkills.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.managementSkills.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.managementSkills.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return managementSkills;
}
