import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const claim = sequelize.define(
    'claim',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      problemDescription: {
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

  claim.associate = (models) => {



    
    models.claim.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.claim.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.claim.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return claim;
}
