/**
 * CAUTION: contact 和 atmosphere 的收取費用較高
 * 詳細可以參照這裡
 * https://mapsplatform.google.com/pricing/
 */

const basic = [
  'business_status',
  'formatted_address',
  'geometry',
  'icon',
  'icon_mask_base_uri',
  'icon_background_color',
  'name',
  'photo',
  'place_id',
  'plus_code',
  'type',
  // 'utc_offset_minutes',
]

const contact = [
  'formatted_phone_number',
  'international_phone_number',
  'opening_hours',
  'website',
]

const atmosphere = ['price_level', 'rating', 'user_ratings_total', 'reviews']

export const FIELDS = {
  basic,
  contact,
  atmosphere,
}
