import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const leaveApplicationForm = sequelize.define(
    'leaveApplicationForm',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      department: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('date')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('date'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      contactNo: {
        type: DataTypes.TEXT,
      },
      employeeNo: {
        type: DataTypes.TEXT,
      },
      absenceWork: {
        type: DataTypes.INTEGER,
      },
      period: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('period')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('period'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      specify: {
        type: DataTypes.TEXT,
      },
      reasons: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "الإجازة السنوية",
            "الإجازة المرضية",
            "إجازة الأمومة",
            "إجازة الرأفة",
            "إجازة غير مدفوعة الأجر",
            "أخرى يرجى التحديد:"
          ]],
        }
      },
      others: {
        type: DataTypes.TEXT,
      },
      noDays: {
        type: DataTypes.INTEGER,
      },
      noTaken: {
        type: DataTypes.INTEGER,
      },
      noBalance: {
        type: DataTypes.INTEGER,
      },
      remarks: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "تمت الموافقة عليها من قبل الإدارة المختصة",
            "رفضتها الإدارة المختصة",
            "موافقة إدارة الموارد البشرية",
            "رفضنها إدارة الموارد البشرية",
            "موافقة المدير العام",
            "رفضها المدير العام"
          ]],
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

  leaveApplicationForm.associate = (models) => {
    models.leaveApplicationForm.belongsTo(models.jobs, {
      as: 'position',
      constraints: false,
    });


    
    models.leaveApplicationForm.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.leaveApplicationForm.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.leaveApplicationForm.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return leaveApplicationForm;
}
