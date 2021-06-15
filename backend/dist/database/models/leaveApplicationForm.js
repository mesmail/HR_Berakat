"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
function default_1(sequelize) {
    const leaveApplicationForm = sequelize.define('leaveApplicationForm', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
        },
        department: {
            type: sequelize_1.DataTypes.TEXT,
        },
        date: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('date')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('date'))
                        .format('YYYY-MM-DD')
                    : null;
            },
        },
        contactNo: {
            type: sequelize_1.DataTypes.TEXT,
        },
        employeeNo: {
            type: sequelize_1.DataTypes.TEXT,
        },
        absenceWork: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        period: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('period')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('period'))
                        .format('YYYY-MM-DD')
                    : null;
            },
        },
        specify: {
            type: sequelize_1.DataTypes.TEXT,
        },
        reasons: {
            type: sequelize_1.DataTypes.TEXT,
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
            type: sequelize_1.DataTypes.TEXT,
        },
        noDays: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        noTaken: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        noBalance: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        remarks: {
            type: sequelize_1.DataTypes.TEXT,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
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
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
            validate: {
                len: [0, 255],
            },
        },
    }, {
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
    });
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
exports.default = default_1;
//# sourceMappingURL=leaveApplicationForm.js.map