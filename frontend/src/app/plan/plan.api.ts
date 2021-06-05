import authAxios from 'src/app/shared/axios/auth-axios';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';

export class PlanApi {
  static async fetchCheckoutSessionId(plan) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/plan/stripe/checkout`,
      {
        plan,
      },
    );

    return response.data.id;
  }

  static async fetchPortalUrl() {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/plan/stripe/portal`,
    );

    return response.data.url;
  }
}
