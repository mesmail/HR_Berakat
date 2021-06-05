import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const employmentContract = sequelize.define(
    'employmentContract',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      employeeName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      workingPeriod: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      employmentSalary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {

        }
      },
      jobRoles: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      employeeContactEmail: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      mobileNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      homeAddress: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      contractPeriod: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      startDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('startDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('startDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
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

  employmentContract.associate = (models) => {



    
    models.employmentContract.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.employmentContract.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.employmentContract.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return employmentContract;
}
