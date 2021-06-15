import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const connectionLevel = sequelize.define(
    'connectionLevel',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      external: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      internal: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
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

  connectionLevel.associate = (models) => {



    
    models.connectionLevel.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.connectionLevel.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.connectionLevel.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return connectionLevel;
}
