import authAxios from 'src/app/shared/axios/auth-axios';
import { tenantSubdomain } from 'src/app/tenant/tenant-subdomain';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';
import SettingsApi from 'src/app/settings/settings-api';
import { environment } from 'src/environments/environment';

export class TenantApi {
  static async fetchAndApply() {
    const tenantUrl = tenantSubdomain.fromLocationHref();

    if (
      tenantSubdomain.isEnabled &&
      tenantSubdomain.isRootDomain
    ) {
      AuthCurrentTenant.clear();
      return;
    }

    // If there is a subdomain with the tenant url,
    // it must fetch the settings form that subdomain no matter
    // which one is on local storage
    if (tenantUrl) {
      let currentTenant;
      try {
        currentTenant = await this.findByUrl(tenantUrl);
      } catch (error) {
        console.error(error);
      }

      AuthCurrentTenant.set(currentTenant);

      if (!currentTenant) {
        window.location.href = `${environment.frontendUrl.protocol}://${environment.frontendUrl.host}`;
        return;
      }
    }

    const tenantId = AuthCurrentTenant.get();
    if (tenantId && !tenantUrl) {
      try {
        const currentTenant = await this.find(tenantId);

        AuthCurrentTenant.set(currentTenant);
      } catch (error) {
        console.error(error);
      }
    }

    SettingsApi.applyThemeFromTenant();
  }

  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const response = await authAxios.put(
      `/tenant/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(`/tenant`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await authAxios.post(`/tenant`, body);

    return response.data;
  }

  static async acceptInvitation(
    token,
    forceAcceptOtherEmail = false,
  ) {
    const response = await authAxios.post(
      `/tenant/invitation/${token}/accept`,
      {
        forceAcceptOtherEmail,
      },
    );

    return response.data;
  }

  static async declineInvitation(token) {
    const params = null;

    const response = await authAxios.delete(
      `/tenant/invitation/${token}/decline`,
      {
        params,
      },
    );

    return response.data;
  }

  static async find(id) {
    const response = await authAxios.get(`/tenant/${id}`);
    return response.data;
  }

  static async findByUrl(url) {
    const response = await authAxios.get(`/tenant/url`, {
      params: { url },
    });
    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/tenant`, {
      params,
    });

    return response.data;
  }
}
