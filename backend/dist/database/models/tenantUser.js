"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roles_1 = __importDefault(require("../../security/roles"));
const sequelizeArrayUtils_1 = __importDefault(require("../utils/sequelizeArrayUtils"));
function default_1(sequelize, DataTypes) {
    const tenantUser = sequelize.define('tenantUser', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        roles: {
            type: sequelizeArrayUtils_1.default.DataType,
            validate: {
                isValidOption: function (value) {
                    if (!value || !value.length) {
                        return value;
                    }
                    const validOptions = Object.keys(roles_1.default.values);
                    if (value.some((item) => !validOptions.includes(item))) {
                        throw new Error(`${value} is not a valid option`);
                    }
                    return value;
                },
            },
        },
        invitationToken: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true,
                isIn: [['active', 'invited', 'empty-permissions']],
            }
        },
    }, {
        timestamps: true,
        paranoid: true,
    });
    tenantUser.associate = (models) => {
        models.tenantUser.belongsTo(models.tenant, {
            foreignKey: {
                allowNull: false,
            },
        });
        models.tenantUser.belongsTo(models.user, {
            foreignKey: {
                allowNull: false,
            },
        });
        models.tenantUser.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.tenantUser.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return tenantUser;
}
exports.default = default_1;
//# sourceMappingURL=tenantUser.js.map