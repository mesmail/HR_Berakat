"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeArrayUtils_1 = __importDefault(require("../utils/sequelizeArrayUtils"));
function default_1(sequelize) {
    const usersNew = sequelize.define('usersNew', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [8, 255],
                notEmpty: true,
            }
        },
        firsrtName: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [3, 255],
                notEmpty: true,
            }
        },
        secondName: {
            type: sequelize_1.DataTypes.TEXT,
        },
        phoneNumber: {
            type: sequelize_1.DataTypes.STRING(11),
            allowNull: false,
            validate: {
                len: [9, 11],
                notEmpty: true,
            }
        },
        roles: {
            type: sequelizeArrayUtils_1.default.DataType,
            validate: {
                isValidOption: function (value) {
                    if (!value || !value.length) {
                        return value;
                    }
                    const validOptions = [
                        "مدراء الاقسام",
                        "العملاء",
                        "الموظفين",
                        "مدير الموقع"
                    ];
                    if (value.some((item) => !validOptions.includes(item))) {
                        throw new Error(`${value} is not a valid option`);
                    }
                    return value;
                },
            },
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
            {
                unique: true,
                fields: ['email', 'tenantId'],
                where: {
                    deletedAt: null,
                },
            },
            {
                unique: true,
                fields: ['phoneNumber', 'tenantId'],
                where: {
                    deletedAt: null,
                },
            },
        ],
        timestamps: true,
        paranoid: true,
    });
    usersNew.associate = (models) => {
        models.usersNew.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.usersNew.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.usersNew.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return usersNew;
}
exports.default = default_1;
//# sourceMappingURL=usersNew.js.map