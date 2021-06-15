import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const cardInformation = sequelize.define(
    'cardInformation',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      version: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      date: {
        type: DataTypes.DATE,
      },
      generalManager: {
        type: DataTypes.TEXT,
      },
      hRManager: {
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
        }
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  cardInformation.associate = (models) => {



    
    models.cardInformation.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.cardInformation.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.cardInformation.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return cardInformation;
}
