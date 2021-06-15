import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const administrativeFinancialPowers = sequelize.define(
    'administrativeFinancialPowers',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      administrativeFinancialPowers: {
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

  administrativeFinancialPowers.associate = (models) => {



    
    models.administrativeFinancialPowers.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.administrativeFinancialPowers.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.administrativeFinancialPowers.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return administrativeFinancialPowers;
}
