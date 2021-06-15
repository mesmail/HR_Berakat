import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const jobRequirments = sequelize.define(
    'jobRequirments',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      tactLevel: {
        type: DataTypes.TEXT,
      },
      experienceYears: {
        type: DataTypes.INTEGER,
      },
      minKPI: {
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

  jobRequirments.associate = (models) => {



    
    models.jobRequirments.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.jobRequirments.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.jobRequirments.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return jobRequirments;
}
