import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const advancedPayment = sequelize.define(
    'advancedPayment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.DECIMAL,
        validate: {
          max: 10000,
        }
      },
      dateRequired: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dateRequired')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dateRequired'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      paymentReason: {
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

  advancedPayment.associate = (models) => {



    
    models.advancedPayment.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.advancedPayment.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.advancedPayment.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return advancedPayment;
}
