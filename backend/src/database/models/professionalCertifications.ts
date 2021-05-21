import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const professionalCertifications = sequelize.define(
    'professionalCertifications',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      professionalCertifications: {
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

  professionalCertifications.associate = (models) => {



    
    models.professionalCertifications.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.professionalCertifications.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.professionalCertifications.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return professionalCertifications;
}
