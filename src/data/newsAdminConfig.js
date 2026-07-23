export const newsAdminConfig = {
  // Keep these posts at the top regardless of score.
  pinnedSlugs: ['saglev-delivers-nigerias-first-locally-assembled-18-passenger-electric-van-to-stanbic-ibtc-bank'],

  // Hide any post by slug without deleting source data.
  blockedSlugs: [],

  // Force priority labels when needed: Critical | Important | Watch.
  manualPriorityBySlug: {
    'range-anxiety-in-nigeria-the-real-ev-concern-nobody-talks-about': 'Critical',
    'when-a-lower-price-costs-more-the-saglev-difference': 'Critical',
    'how-to-stretch-your-ev-battery-in-nigerias-driving-conditions': 'Critical',
  },

  // Tweak relevance scoring weights here.
  keywordWeights: {
    delivers: 5,
    launches: 5,
    unveils: 4,
    partnership: 4,
    first: 3,
    assembled: 3,
    corporate: 3,
    fleet: 3,
    charging: 2,
    battery: 2,
    range: 2,
    nigeria: 1,
    electric: 1,
    ev: 1,
  },
}
