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
      contractDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('contractDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('contractDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      companyRepresentative: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      secondParty: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      nationality: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      passportNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      passportIssueDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('passportIssueDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('passportIssueDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      jobTitle: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      dailyWorkingHours: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      weeklyWorkingHours: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      weekEndDay: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      workStartDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('workStartDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('workStartDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      employeeName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      positionName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      basicSalary: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

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
