import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const trainingCertificates = sequelize.define(
    'trainingCertificates',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      trainingCertificates: {
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

  trainingCertificates.associate = (models) => {



    
    models.trainingCertificates.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.trainingCertificates.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.trainingCertificates.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return trainingCertificates;
}
