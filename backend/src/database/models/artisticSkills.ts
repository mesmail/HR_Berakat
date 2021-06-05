import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const artisticSkills = sequelize.define(
    'artisticSkills',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      artisticSkills: {
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

  artisticSkills.associate = (models) => {



    
    models.artisticSkills.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.artisticSkills.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.artisticSkills.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return artisticSkills;
}
