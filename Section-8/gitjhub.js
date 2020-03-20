class Github {
  constructor() {
    this.client_id = 'd5a1daa152143de34360';
    this.client_secret = '60fc9f211ae57de0f1ce287f9f0ed2131754d617';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
