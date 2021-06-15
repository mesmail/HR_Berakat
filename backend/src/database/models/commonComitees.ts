import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const commonComitees = sequelize.define(
    'commonComitees',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      addedCommittee: {
        type: DataTypes.TEXT,
      },
      menus: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            ": لجنة المبايعات",
            "لجنة المسافرات",
            "لجنة المصالحات",
            "لجنة اللجان"
          ]],
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

  commonComitees.associate = (models) => {



    
    models.commonComitees.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.commonComitees.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.commonComitees.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return commonComitees;
}
