import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const academicCertificates = sequelize.define(
    'academicCertificates',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      academicCertificates: {
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

  academicCertificates.associate = (models) => {



    
    models.academicCertificates.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.academicCertificates.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.academicCertificates.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return academicCertificates;
}
