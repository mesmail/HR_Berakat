import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const tellProblem = sequelize.define(
    'tellProblem',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      problemDescription: {
        type: DataTypes.TEXT,
      },
      occuranceDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('occuranceDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('occuranceDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      possibleCauses: {
        type: DataTypes.TEXT,
      },
      suggestedSolves: {
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

  tellProblem.associate = (models) => {



    
    models.tellProblem.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.tellProblem.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.tellProblem.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return tellProblem;
}
