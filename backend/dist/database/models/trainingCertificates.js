"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const trainingCertificates = sequelize.define('trainingCertificates', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        trainingCertificates: {
            type: sequelize_1.DataTypes.TEXT,
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
    trainingCertificates.associate = (models) => {
        models.trainingCertificates.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.trainingCertificates.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.trainingCertificates.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return trainingCertificates;
}
exports.default = default_1;
//# sourceMappingURL=trainingCertificates.js.map