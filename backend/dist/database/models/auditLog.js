"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    const auditLog = sequelize.define('auditLog', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        entityName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [0, 255],
            },
        },
        entityId: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [0, 255],
            },
        },
        tenantId: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        action: {
            type: DataTypes.STRING(32),
            allowNull: false,
            validate: {
                len: [0, 32],
            },
        },
        createdById: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        createdByEmail: {
            type: DataTypes.STRING(255),
            validate: {
                len: [0, 255],
            },
            allowNull: true,
        },
        timestamp: { type: DataTypes.DATE, allowNull: false },
        values: { type: DataTypes.JSON, allowNull: false },
    }, {
        timestamps: false,
    });
    auditLog.associate = (models) => { };
    return auditLog;
}
exports.default = default_1;
//# sourceMappingURL=auditLog.js.map