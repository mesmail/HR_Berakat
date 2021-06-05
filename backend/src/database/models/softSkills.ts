import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const softSkills = sequelize.define(
    'softSkills',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
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

  softSkills.associate = (models) => {



    
    models.softSkills.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.softSkills.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.softSkills.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return softSkills;
}
