import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const clients = sequelize.define(
    'clients',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      clientName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [0, 100],
          notEmpty: true,
        }
      },
      jobCount: {
        type: DataTypes.INTEGER,
      },
      clientIndustry: {
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

  clients.associate = (models) => {



    
    models.clients.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.clients.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.clients.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return clients;
}
