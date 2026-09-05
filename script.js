/* =========================================================
   COMMUNITY RESOURCE FINDER — REBUILT
   200 resources preserved from the supplied dataset.
========================================================= */

const RESOURCE_COUNT = 200;

const RESOURCE_DETAILS = {
  1: { access: "Use the official St. Mary's Food Bank website or call 602-242-3663 to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by St. Mary's Food Bank; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "St. Mary's Food Bank, Phoenix, AZ" },
  2: { access: "Use the official Arizona Food Bank Network website or call 602-528-3434 to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Arizona Food Bank Network; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Arizona Food Bank Network, Arizona" },
  3: { access: "Apply through Arizona DES/Health-e-Arizona Plus, complete the application and required interview, then submit the verification DES requests. Use the linked DES nutrition-assistance page for the current application route.", eligibility: "Arizona households are evaluated under SNAP/Nutrition Assistance rules, including household composition and financial eligibility; DES determines eligibility after application and interview.", documents: "Prepare identity/citizenship or lawful-status verification as applicable, Social Security information for applicants, household/income records, and—when relevant—rent/mortgage, utility, childcare, medical, and child-support expense verification.", directionsQuery: "Arizona Nutrition Assistance (SNAP), Arizona" },
  4: { access: "Use the Arizona WIC participant portal linked above to complete the eligibility assessment, select an Arizona clinic, and follow the registration steps for the WIC appointment.", eligibility: "Arizona residents who are pregnant, recently pregnant, breastfeeding, infants, or children under age 5 may qualify; income/program participation and nutrition-risk rules apply.", documents: "For the WIC appointment, prepare household/member information, Arizona residence information, and any documents requested through the WIC eligibility/clinic registration process; the clinic will identify additional verification needed.", directionsQuery: "Arizona WIC, Arizona" },
  5: { access: "Bring an active SNAP/EBT card to a participating Double Up Arizona site; the program has separate procedures for farmers markets, grocery stores, CSAs, farm stands, mobile markets, and participating online sites.", eligibility: "Requires an active SNAP/EBT balance and use at a participating Double Up Arizona location; no separate Double Up application is required.", documents: "Bring an active SNAP/EBT card with an available balance; participating locations may use their own checkout or token/voucher procedure.", directionsQuery: "Double Up Food Bucks Arizona, Arizona" },
  6: { access: "Use the official Desert Mission Food Bank website or call 602-870-6060 to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Desert Mission Food Bank; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Desert Mission Food Bank, Phoenix, AZ" },
  7: { access: "Use the official Phoenix Rescue Mission website or call 602-233-3000 to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Phoenix Rescue Mission; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Phoenix Rescue Mission, Phoenix, AZ" },
  8: { access: "Use the official St. Vincent de Paul Phoenix website or call 602-266-4673 to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by St. Vincent de Paul Phoenix; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "St. Vincent de Paul Phoenix, Phoenix, AZ" },
  9: { access: "Use the official Andre House website or call 602-255-6878 to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Andre House; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Andre House, Phoenix, AZ" },
  10: { access: "Use the official FIBCO Family Services website or call 602-272-7300 to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by FIBCO Family Services; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "FIBCO Family Services, Phoenix, AZ" },
  11: { access: "Use the official United Food Bank website or call 480-926-4897 to confirm the current food-distribution site, hours, and intake procedure for Mesa, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by United Food Bank; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "United Food Bank, Mesa, AZ" },
  12: { access: "Use the official AZCEND Food Bank website or call 480-963-1423 to confirm the current food-distribution site, hours, and intake procedure for Chandler, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by AZCEND Food Bank; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "AZCEND Food Bank, Chandler, AZ" },
  13: { access: "Use the official Hope for Hunger Food Bank website or call 623-848-0930 to confirm the current food-distribution site, hours, and intake procedure for Glendale, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Hope for Hunger Food Bank; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Hope for Hunger Food Bank, Glendale, AZ" },
  14: { access: "Use the official Tempe Community Action Agency Food Pantry website or call 480-422-8922 to confirm the current food-distribution site, hours, and intake procedure for Tempe, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Tempe Community Action Agency Food Pantry; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Tempe Community Action Agency Food Pantry, Tempe, AZ" },
  15: { access: "Use the official TEFAP Arizona website or call Check website to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by TEFAP Arizona; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "TEFAP Arizona, Arizona" },
  16: { access: "Use the official Arizona Commodity Senior Food Program website or call 602-771-2790 to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Designed for qualifying older adults; the specific program may use age, income, or existing participation in a senior food program to determine eligibility.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Arizona Commodity Senior Food Program, Arizona" },
  17: { access: "Use the official Phoenix Senior Center Meals website or call 602-262-6631 to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Designed for qualifying older adults; the specific program may use age, income, or existing participation in a senior food program to determine eligibility.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Phoenix Senior Center Meals, Phoenix, AZ" },
  18: { access: "Use the official Lutheran Social Services Food Assistance website or call 602-297-6045 to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Lutheran Social Services Food Assistance; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Lutheran Social Services Food Assistance, Arizona" },
  19: { access: "Use the official Salvation Army Metro Phoenix Food Assistance website or call 602-267-4100 to confirm the current food-distribution site, hours, and intake procedure for Phoenix Metro Area. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Salvation Army Metro Phoenix Food Assistance; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Salvation Army Metro Phoenix Food Assistance, Phoenix Metro Area" },
  20: { access: "Use the official NourishPHX website or call Check website to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by NourishPHX; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "NourishPHX, Phoenix, AZ" },
  21: { access: "Use the official ICNA Relief Arizona website or call Check website to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by ICNA Relief Arizona; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "ICNA Relief Arizona, Arizona" },
  22: { access: "Use the official Arizona Kosher Food Pantry website or call Check website to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Arizona Kosher Food Pantry; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Arizona Kosher Food Pantry, Phoenix, AZ" },
  23: { access: "Use the official Farm Express website or call Check website to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Farm Express; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Farm Express, Phoenix, AZ" },
  24: { access: "Use the official Arizona Self Help website or call 602-604-0640 to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Arizona Self Help; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Arizona Self Help, Arizona" },
  25: { access: "Use the official USDA National Hunger Hotline website or call 866-348-6479 to confirm the current food-distribution site, hours, and intake procedure for United States. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by USDA National Hunger Hotline; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "USDA National Hunger Hotline, United States" },
  26: { access: "Use the official City of Phoenix Food Resources website or call 602-262-3111 to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by City of Phoenix Food Resources; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "City of Phoenix Food Resources, Phoenix, AZ" },
  27: { access: "Use the official City of Mesa Food Resources website or call 480-644-6466 to confirm the current food-distribution site, hours, and intake procedure for Mesa, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by City of Mesa Food Resources; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "City of Mesa Food Resources, Mesa, AZ" },
  28: { access: "Use the official Tempe Food Assistance website or call 480-350-4311 to confirm the current food-distribution site, hours, and intake procedure for Tempe, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Tempe Food Assistance; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Tempe Food Assistance, Tempe, AZ" },
  29: { access: "Use the official Senior Farmers Market Nutrition Program website or call Check website to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Designed for qualifying older adults; the specific program may use age, income, or existing participation in a senior food program to determine eligibility.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Senior Farmers Market Nutrition Program, Arizona" },
  30: { access: "Use the official Arizona Farmers Market Nutrition Program website or call Check website to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Arizona Farmers Market Nutrition Program; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Arizona Farmers Market Nutrition Program, Arizona" },
  31: { access: "Open the linked directory, enter the household ZIP/location, and select a currently listed food pantry or meal provider before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Food Bank Locator — Arizona; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Food Bank Locator — Arizona, Arizona" },
  32: { access: "Use the official Food Assistance — Arizona DES website or call 855-432-7587 to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Food Assistance — Arizona DES; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Food Assistance — Arizona DES, Arizona" },
  33: { access: "Open the linked directory, enter the household ZIP/location, and select a currently listed food pantry or meal provider before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Food Assistance — 211 Arizona; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Food Assistance — 211 Arizona, Arizona" },
  34: { access: "Use the official Phoenix Food Assistance and Community Resources website or call 602-262-3111 to confirm the current food-distribution site, hours, and intake procedure for Phoenix, AZ. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Phoenix Food Assistance and Community Resources; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Phoenix Food Assistance and Community Resources, Phoenix, AZ" },
  35: { access: "Use the official Arizona Food Assistance Programs website or call Check website to confirm the current food-distribution site, hours, and intake procedure for Arizona. If the organization uses multiple sites, select the location serving your area before traveling.", eligibility: "Eligibility depends on the food program and serving site operated or listed by Arizona Food Assistance Programs; local pantry programs may use residence, household need, or income guidelines.", documents: "Bring the identification or residence/income documentation requested by the specific pantry or food program; requirements vary by distribution site. Do not assume digital copies are accepted.", directionsQuery: "Arizona Food Assistance Programs, Arizona" },
  36: { access: "Start with the official City of Phoenix Housing Department site and follow its housing, shelter, rental, or legal-service intake instructions. For Phoenix, AZ services, use the site or call 602-262-6794 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by City of Phoenix Housing Department.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "City of Phoenix Housing Department, Phoenix, AZ" },
  37: { access: "Start with the official Arizona Department of Housing site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 602-771-1000 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Arizona Department of Housing.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Arizona Department of Housing, Arizona" },
  38: { access: "Start with the official HousingSearch.AZ.gov site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call Check website to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by HousingSearch.AZ.gov.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "HousingSearch.AZ.gov, Arizona" },
  39: { access: "Start with the official 211 Arizona Housing Assistance site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 211 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by 211 Arizona Housing Assistance.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "211 Arizona Housing Assistance, Arizona" },
  40: { access: "Start with the official HOM Inc. site and follow its housing, shelter, rental, or legal-service intake instructions. For Phoenix, AZ services, use the site or call 602-265-4646 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by HOM Inc..", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "HOM Inc., Phoenix, AZ" },
  41: { access: "Start with the official UMOM New Day Centers site and follow its housing, shelter, rental, or legal-service intake instructions. For Phoenix, AZ services, use the site or call 602-275-7852 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by UMOM New Day Centers.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "UMOM New Day Centers, Phoenix, AZ" },
  42: { access: "Start with the official Native American Connections site and follow its housing, shelter, rental, or legal-service intake instructions. For Phoenix, AZ services, use the site or call 602-495-3900 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Native American Connections.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Native American Connections, Phoenix, AZ" },
  43: { access: "Start with the official Save the Family site and follow its housing, shelter, rental, or legal-service intake instructions. For Mesa, AZ services, use the site or call 480-898-0228 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Save the Family.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Save the Family, Mesa, AZ" },
  44: { access: "Start with the official Chicanos Por La Causa Housing site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 602-257-0700 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Chicanos Por La Causa Housing.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Chicanos Por La Causa Housing, Arizona" },
  45: { access: "Start with the official Community Legal Services site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 602-258-3434 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Community Legal Services.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Community Legal Services, Arizona" },
  46: { access: "Start with the official City of Mesa Housing Resources site and follow its housing, shelter, rental, or legal-service intake instructions. For Mesa, AZ services, use the site or call 480-644-6466 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by City of Mesa Housing Resources.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "City of Mesa Housing Resources, Mesa, AZ" },
  47: { access: "Start with the official Mesa Homeless Resource Line site and follow its housing, shelter, rental, or legal-service intake instructions. For Mesa, AZ services, use the site or call 480-644-4673 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Mesa Homeless Resource Line.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Mesa Homeless Resource Line, Mesa, AZ" },
  48: { access: "Start with the official Arizona Fair Housing Center site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 602-548-1599 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Arizona Fair Housing Center.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Arizona Fair Housing Center, Arizona" },
  49: { access: "Start with the official Arizona Community Action Agencies site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call Check website to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Arizona Community Action Agencies.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Arizona Community Action Agencies, Arizona" },
  50: { access: "Start with the official Arizona Housing Resources site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 602-771-1000 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Arizona Housing Resources.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Arizona Housing Resources, Arizona" },
  51: { access: "Start with the official Phoenix Emergency Housing Resources site and follow its housing, shelter, rental, or legal-service intake instructions. For Phoenix, AZ services, use the site or call 602-262-6661 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Phoenix Emergency Housing Resources.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Phoenix Emergency Housing Resources, Phoenix, AZ" },
  52: { access: "Start with the official Phoenix Homeless Services site and follow its housing, shelter, rental, or legal-service intake instructions. For Phoenix, AZ services, use the site or call 602-262-6661 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Phoenix Homeless Services.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Phoenix Homeless Services, Phoenix, AZ" },
  53: { access: "Start with the official Arizona Rental Assistance Information site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 602-771-1000 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Arizona Rental Assistance Information.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Arizona Rental Assistance Information, Arizona" },
  54: { access: "Start with the official Arizona Landlord and Tenant Resources site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 602-771-1000 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Arizona Landlord and Tenant Resources.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Arizona Landlord and Tenant Resources, Arizona" },
  55: { access: "Start with the official Phoenix Eviction Legal Services site and follow its housing, shelter, rental, or legal-service intake instructions. For Phoenix, AZ services, use the site or call 602-262-6661 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Phoenix Eviction Legal Services.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Phoenix Eviction Legal Services, Phoenix, AZ" },
  56: { access: "Start with the official Phoenix Home Repair Assistance site and follow its housing, shelter, rental, or legal-service intake instructions. For Phoenix, AZ services, use the site or call 602-262-6661 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Phoenix Home Repair Assistance.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Phoenix Home Repair Assistance, Phoenix, AZ" },
  57: { access: "Start with the official Arizona Weatherization Assistance site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 602-771-1000 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Arizona Weatherization Assistance.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Arizona Weatherization Assistance, Arizona" },
  58: { access: "Start with the official 211 Arizona Shelter Search site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 211 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by 211 Arizona Shelter Search.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "211 Arizona Shelter Search, Arizona" },
  59: { access: "Start with the official Mesa Community Support Programs site and follow its housing, shelter, rental, or legal-service intake instructions. For Mesa, AZ services, use the site or call 480-644-6466 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Mesa Community Support Programs.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Mesa Community Support Programs, Mesa, AZ" },
  60: { access: "Start with the official Arizona Department of Housing Resources site and follow its housing, shelter, rental, or legal-service intake instructions. For Arizona services, use the site or call 602-771-1000 to confirm whether an appointment, referral, waitlist, or screening is required before visiting.", eligibility: "Eligibility is program-specific and may depend on household income, household size, housing status, disability/age, residency, or the particular property/program administered by Arizona Department of Housing Resources.", documents: "Prepare government-issued ID, household member information, income/benefit verification, current lease or housing information, and any eviction/homelessness documentation that applies to the program; the provider may request additional documents.", directionsQuery: "Arizona Department of Housing Resources, Arizona" },
  61: { access: "Use the official AHCCCS site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-417-4000 to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at AHCCCS; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "AHCCCS, Arizona" },
  62: { access: "Use the official NATIVE HEALTH site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-279-5262 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at NATIVE HEALTH; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "NATIVE HEALTH, Phoenix, AZ" },
  63: { access: "Use the official Adelante Healthcare site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 877-809-5092 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix Metro Area service point.", eligibility: "Eligibility and payment rules depend on the specific service at Adelante Healthcare; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Adelante Healthcare, Phoenix Metro Area" },
  64: { access: "Use the official NOAH site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 480-882-4545 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix Metro Area service point.", eligibility: "Eligibility and payment rules depend on the specific service at NOAH; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "NOAH, Phoenix Metro Area" },
  65: { access: "Use the official Mountain Park Health Center site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-243-7277 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Mountain Park Health Center; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Mountain Park Health Center, Phoenix, AZ" },
  66: { access: "Use the official Valle del Sol site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-258-6797 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Valle del Sol; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Valle del Sol, Phoenix, AZ" },
  67: { access: "Use the official Valleywise Health site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-344-5011 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Valleywise Health; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Valleywise Health, Phoenix, AZ" },
  68: { access: "Use the official Terros Health site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-685-6000 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Terros Health; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Terros Health, Phoenix, AZ" },
  69: { access: "Use the official Circle the City site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-776-0776 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Circle the City; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Circle the City, Phoenix, AZ" },
  70: { access: "Use the official Phoenix Allies for Community Health site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call Check website to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Phoenix Allies for Community Health; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Phoenix Allies for Community Health, Phoenix, AZ" },
  71: { access: "Use the official Arizona DHS Sliding Fee Clinics site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-542-1025 to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Arizona DHS Sliding Fee Clinics; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Arizona DHS Sliding Fee Clinics, Arizona" },
  72: { access: "Use the official Arizona Alliance for Community Health Centers site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call Check website to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Arizona Alliance for Community Health Centers; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Arizona Alliance for Community Health Centers, Arizona" },
  73: { access: "Use the official Health-e-Arizona Plus site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call Check website to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Health-e-Arizona Plus; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Health-e-Arizona Plus, Arizona" },
  74: { access: "Use the official Healthcare.gov site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 800-318-2596 to confirm accepted insurance/payment options, new-patient availability, and the correct United States service point.", eligibility: "Eligibility and payment rules depend on the specific service at Healthcare.gov; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Healthcare.gov, United States" },
  75: { access: "Use the official HRSA Find a Health Center site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call Check website to confirm accepted insurance/payment options, new-patient availability, and the correct United States service point.", eligibility: "Eligibility and payment rules depend on the specific service at HRSA Find a Health Center; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "HRSA Find a Health Center, United States" },
  76: { access: "Use the official Wesley Health Center site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call Check website to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Wesley Health Center; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Wesley Health Center, Phoenix, AZ" },
  77: { access: "Use the official Neighborhood Christian Clinic site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call Check website to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Neighborhood Christian Clinic; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Neighborhood Christian Clinic, Phoenix, AZ" },
  78: { access: "Use the official Mission of Mercy Arizona site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call Check website to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Mission of Mercy Arizona; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Mission of Mercy Arizona, Arizona" },
  79: { access: "Use the official Maricopa County Public Health site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-506-6767 to confirm accepted insurance/payment options, new-patient availability, and the correct Maricopa County, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Maricopa County Public Health; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Maricopa County Public Health, Maricopa County, AZ" },
  80: { access: "Use the official Cover Arizona site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call Check website to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Cover Arizona; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Cover Arizona, Arizona" },
  81: { access: "Use the official Phoenix Indian Medical Center site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-263-1200 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Phoenix Indian Medical Center; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Phoenix Indian Medical Center, Phoenix, AZ" },
  82: { access: "Use the official Southwest Human Development site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-266-5976 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Southwest Human Development; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Southwest Human Development, Phoenix, AZ" },
  83: { access: "Use the official Raising Special Kids site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-242-4366 to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Raising Special Kids; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Raising Special Kids, Arizona" },
  84: { access: "Use the official Arizona Early Intervention Program site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call Check website to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Arizona Early Intervention Program; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Arizona Early Intervention Program, Arizona" },
  85: { access: "Use the official Family Involvement Center site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-412-4095 to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Family Involvement Center; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Family Involvement Center, Arizona" },
  86: { access: "Use the official Community Bridges site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 877-931-9142 to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Community Bridges; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Community Bridges, Arizona" },
  87: { access: "Use the official Southwest Behavioral & Health Services site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-265-8338 to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Southwest Behavioral & Health Services; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Southwest Behavioral & Health Services, Arizona" },
  88: { access: "Use the official Copa Health site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 480-969-3800 to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at Copa Health; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Copa Health, Arizona" },
  89: { access: "Use the official La Frontera EMPACT site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 480-784-1514 to confirm accepted insurance/payment options, new-patient availability, and the correct Arizona service point.", eligibility: "Eligibility and payment rules depend on the specific service at La Frontera EMPACT; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "La Frontera EMPACT, Arizona" },
  90: { access: "Use the official NOAH Desert Mission Health Center site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 480-882-4545 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at NOAH Desert Mission Health Center; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "NOAH Desert Mission Health Center, Phoenix, AZ" },
  91: { access: "Use the official NOAH Palomino Health Center site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 480-882-4545 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix Metro Area service point.", eligibility: "Eligibility and payment rules depend on the specific service at NOAH Palomino Health Center; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "NOAH Palomino Health Center, Phoenix Metro Area" },
  92: { access: "Use the official NOAH Venado Valley site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 480-882-4545 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at NOAH Venado Valley; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "NOAH Venado Valley, Phoenix, AZ" },
  93: { access: "Use the official Mountain Park — Baseline site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-243-7277 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Mountain Park — Baseline; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Mountain Park — Baseline, Phoenix, AZ" },
  94: { access: "Use the official Mountain Park — Gateway site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-243-7277 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Mountain Park — Gateway; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Mountain Park — Gateway, Phoenix, AZ" },
  95: { access: "Use the official Mountain Park — Balsz site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-243-7277 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Mountain Park — Balsz; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Mountain Park — Balsz, Phoenix, AZ" },
  96: { access: "Use the official Mountain Park — Christown site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-243-7277 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Mountain Park — Christown; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Mountain Park — Christown, Phoenix, AZ" },
  97: { access: "Use the official Adelante — Central site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 877-809-5092 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Adelante — Central; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Adelante — Central, Phoenix, AZ" },
  98: { access: "Use the official Adelante — Metro Parkway site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 877-809-5092 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Adelante — Metro Parkway; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Adelante — Metro Parkway, Phoenix, AZ" },
  99: { access: "Use the official Valle del Sol — Maryvale site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-258-6797 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Valle del Sol — Maryvale; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Valle del Sol — Maryvale, Phoenix, AZ" },
  100: { access: "Use the official Valle del Sol — 7th Street site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-258-6797 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Valle del Sol — 7th Street; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Valle del Sol — 7th Street, Phoenix, AZ" },
  101: { access: "Use the official Valle del Sol — 17th Street site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-258-6797 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Valle del Sol — 17th Street; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Valle del Sol — 17th Street, Phoenix, AZ" },
  102: { access: "Use the official Valle del Sol — 1st Avenue site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-258-6797 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Valle del Sol — 1st Avenue; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Valle del Sol — 1st Avenue, Phoenix, AZ" },
  103: { access: "Use the official Terros Health — McDowell site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-685-6000 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Terros Health — McDowell; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Terros Health — McDowell, Phoenix, AZ" },
  104: { access: "Use the official Terros Health — 23rd Avenue site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-685-6000 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Terros Health — 23rd Avenue; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Terros Health — 23rd Avenue, Phoenix, AZ" },
  105: { access: "Use the official Terros Health — 27th Avenue site to choose the appropriate clinic/service and request an appointment or follow its patient-intake instructions. Call 602-685-6000 to confirm accepted insurance/payment options, new-patient availability, and the correct Phoenix, AZ service point.", eligibility: "Eligibility and payment rules depend on the specific service at Terros Health — 27th Avenue; patients may be served based on insurance, income/sliding-fee rules, age, location, or program enrollment.", documents: "Prepare photo ID, insurance/AHCCCS information if applicable, contact information, medication/medical history, and income documentation if the clinic uses a sliding-fee program. Bring any referral or authorization the specific service requires.", directionsQuery: "Terros Health — 27th Avenue, Phoenix, AZ" },
  106: { access: "Use the official ARIZONA@WORK employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call Check website if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at ARIZONA@WORK; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "ARIZONA@WORK, Arizona" },
  107: { access: "Use the official Arizona DES Employment Services employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-542-6046 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Arizona DES Employment Services; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Arizona DES Employment Services, Arizona" },
  108: { access: "Use the official Goodwill of Central and Northern Arizona employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-535-4000 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Goodwill of Central and Northern Arizona; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Goodwill of Central and Northern Arizona, Arizona" },
  109: { access: "Use the official St. Joseph the Worker employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-417-9854 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at St. Joseph the Worker; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "St. Joseph the Worker, Phoenix, AZ" },
  110: { access: "Use the official Fresh Start Women's Foundation employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-252-8494 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Fresh Start Women's Foundation; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Fresh Start Women's Foundation, Phoenix, AZ" },
  111: { access: "Use the official Friendly House employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-257-1870 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Friendly House; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Friendly House, Phoenix, AZ" },
  112: { access: "Use the official Career Connectors employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call Check website if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Career Connectors; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Career Connectors, Phoenix Metro Area" },
  113: { access: "Use the official Per Scholas employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call Check website if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Per Scholas; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Per Scholas, Arizona" },
  114: { access: "Use the official City of Phoenix Jobs employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call Check website if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at City of Phoenix Jobs; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "City of Phoenix Jobs, Phoenix, AZ" },
  115: { access: "Use the official Chicanos Por La Causa Employment Services employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-257-0700 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Chicanos Por La Causa Employment Services; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Chicanos Por La Causa Employment Services, Arizona" },
  116: { access: "Use the official Maricopa County Workforce Development employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-506-2419 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Maricopa County Workforce Development; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Maricopa County Workforce Development, Maricopa County, AZ" },
  117: { access: "Use the official Mesa Workforce Center employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 480-644-6466 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Mesa Workforce Center; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Mesa Workforce Center, Mesa, AZ" },
  118: { access: "Use the official Tempe Workforce Resources employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 480-350-4311 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Tempe Workforce Resources; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Tempe Workforce Resources, Tempe, AZ" },
  119: { access: "Use the official Arizona Self Help — Employment Screening employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-604-0640 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Arizona Self Help — Employment Screening; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Arizona Self Help — Employment Screening, Arizona" },
  120: { access: "Use the official ARIZONA@WORK Youth Services employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call Check website if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at ARIZONA@WORK Youth Services; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "ARIZONA@WORK Youth Services, Arizona" },
  121: { access: "Use the official Arizona Job Connection employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call Check website if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Arizona Job Connection; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Arizona Job Connection, Arizona" },
  122: { access: "Use the official DES Job Search Resources employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-542-6046 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at DES Job Search Resources; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "DES Job Search Resources, Arizona" },
  123: { access: "Use the official Arizona Community Action Agencies — Employment employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call Check website if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Arizona Community Action Agencies — Employment; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Arizona Community Action Agencies — Employment, Arizona" },
  124: { access: "Use the official St. Joseph the Worker Employment Services employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-417-9854 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at St. Joseph the Worker Employment Services; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "St. Joseph the Worker Employment Services, Phoenix, AZ" },
  125: { access: "Use the official Goodwill Career Services employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-535-4000 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Goodwill Career Services; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Goodwill Career Services, Arizona" },
  126: { access: "Use the official Fresh Start Career Development employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-252-8494 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Fresh Start Career Development; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Fresh Start Career Development, Phoenix, AZ" },
  127: { access: "Use the official Friendly House Workforce Programs employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-257-1870 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Friendly House Workforce Programs; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Friendly House Workforce Programs, Phoenix, AZ" },
  128: { access: "Use the official CPLC Workforce Programs employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-257-0700 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at CPLC Workforce Programs; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "CPLC Workforce Programs, Arizona" },
  129: { access: "Use the official Career Connectors Events employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call Check website if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Career Connectors Events; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Career Connectors Events, Phoenix Metro Area" },
  130: { access: "Use the official Arizona Employment Services employment page to create/apply for the relevant job, training, or workforce service. Follow the organization's intake or registration steps and call 602-542-6046 if the listing requires an appointment or local enrollment.", eligibility: "Eligibility depends on the specific employment or training service at Arizona Employment Services; some programs may have age, residency, income, employment-status, or workforce-program requirements.", documents: "Prepare a current resume if available, government-issued ID/work-authorization documents when required for employment, contact information, education/training records, and any program-specific eligibility documentation.", directionsQuery: "Arizona Employment Services, Arizona" },
  131: { access: "Open the official Arizona Adult Education program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call Check website to confirm placement, class availability, age requirements, or the correct Arizona campus.", eligibility: "Eligibility depends on the specific course or program at Arizona Adult Education; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Arizona Adult Education, Arizona" },
  132: { access: "Open the official Rio Salado College Adult Education program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 480-517-8110 to confirm placement, class availability, age requirements, or the correct Maricopa County, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Rio Salado College Adult Education; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Rio Salado College Adult Education, Maricopa County, AZ" },
  133: { access: "Open the official Phoenix Public Library program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-262-4636 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Phoenix Public Library; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Phoenix Public Library, Phoenix, AZ" },
  134: { access: "Open the official Literacy Phoenix program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-274-3439 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Literacy Phoenix; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Literacy Phoenix, Phoenix, AZ" },
  135: { access: "Open the official Job Corps program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 800-733-5627 to confirm placement, class availability, age requirements, or the correct United States campus.", eligibility: "Eligibility depends on the specific course or program at Job Corps; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Job Corps, United States" },
  136: { access: "Open the official Maricopa Community Colleges program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 480-731-8000 to confirm placement, class availability, age requirements, or the correct Maricopa County, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Maricopa Community Colleges; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Maricopa Community Colleges, Maricopa County, AZ" },
  137: { access: "Open the official GateWay Community College program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-286-8000 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at GateWay Community College; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "GateWay Community College, Phoenix, AZ" },
  138: { access: "Open the official Friendly House Education Programs program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-257-1870 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Friendly House Education Programs; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Friendly House Education Programs, Phoenix, AZ" },
  139: { access: "Open the official ARIZONA@WORK Youth Education Services program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call Check website to confirm placement, class availability, age requirements, or the correct Arizona campus.", eligibility: "Eligibility depends on the specific course or program at ARIZONA@WORK Youth Education Services; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "ARIZONA@WORK Youth Education Services, Arizona" },
  140: { access: "Open the official Phoenix Head Start program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-262-4040 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Phoenix Head Start; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Phoenix Head Start, Phoenix, AZ" },
  141: { access: "Open the official Arizona Literacy Resources program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call Check website to confirm placement, class availability, age requirements, or the correct Arizona campus.", eligibility: "Eligibility depends on the specific course or program at Arizona Literacy Resources; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Arizona Literacy Resources, Arizona" },
  142: { access: "Open the official Phoenix Library Homework Help program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-262-4636 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Phoenix Library Homework Help; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Phoenix Library Homework Help, Phoenix, AZ" },
  143: { access: "Open the official Phoenix Library Computer Access program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-262-4636 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Phoenix Library Computer Access; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Phoenix Library Computer Access, Phoenix, AZ" },
  144: { access: "Open the official Phoenix Library Literacy Programs program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-262-4636 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Phoenix Library Literacy Programs; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Phoenix Library Literacy Programs, Phoenix, AZ" },
  145: { access: "Open the official Rio Salado GED Resources program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 480-517-8110 to confirm placement, class availability, age requirements, or the correct Maricopa County, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Rio Salado GED Resources; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Rio Salado GED Resources, Maricopa County, AZ" },
  146: { access: "Open the official Rio Salado English Programs program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 480-517-8110 to confirm placement, class availability, age requirements, or the correct Maricopa County, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Rio Salado English Programs; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Rio Salado English Programs, Maricopa County, AZ" },
  147: { access: "Open the official Arizona Adult Education ESL program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call Check website to confirm placement, class availability, age requirements, or the correct Arizona campus.", eligibility: "Eligibility depends on the specific course or program at Arizona Adult Education ESL; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Arizona Adult Education ESL, Arizona" },
  148: { access: "Open the official Arizona Adult Education Career Preparation program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call Check website to confirm placement, class availability, age requirements, or the correct Arizona campus.", eligibility: "Eligibility depends on the specific course or program at Arizona Adult Education Career Preparation; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Arizona Adult Education Career Preparation, Arizona" },
  149: { access: "Open the official Maricopa Community Colleges Career Programs program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 480-731-8000 to confirm placement, class availability, age requirements, or the correct Maricopa County, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Maricopa Community Colleges Career Programs; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Maricopa Community Colleges Career Programs, Maricopa County, AZ" },
  150: { access: "Open the official Maricopa Community Colleges Certificates program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 480-731-8000 to confirm placement, class availability, age requirements, or the correct Maricopa County, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Maricopa Community Colleges Certificates; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Maricopa Community Colleges Certificates, Maricopa County, AZ" },
  151: { access: "Open the official GateWay Career Training program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-286-8000 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at GateWay Career Training; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "GateWay Career Training, Phoenix, AZ" },
  152: { access: "Open the official Job Corps Career Training program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 800-733-5627 to confirm placement, class availability, age requirements, or the correct United States campus.", eligibility: "Eligibility depends on the specific course or program at Job Corps Career Training; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Job Corps Career Training, United States" },
  153: { access: "Open the official Phoenix Head Start Birth to Five program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-262-4040 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Phoenix Head Start Birth to Five; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Phoenix Head Start Birth to Five, Phoenix, AZ" },
  154: { access: "Open the official Friendly House English Classes program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call 602-257-1870 to confirm placement, class availability, age requirements, or the correct Phoenix, AZ campus.", eligibility: "Eligibility depends on the specific course or program at Friendly House English Classes; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Friendly House English Classes, Phoenix, AZ" },
  155: { access: "Open the official Arizona Education Resources program page, review the program-specific enrollment/admission steps, and complete the required registration or application. Call Check website to confirm placement, class availability, age requirements, or the correct Arizona campus.", eligibility: "Eligibility depends on the specific course or program at Arizona Education Resources; requirements may include age, prior education, residency, placement, or program-specific enrollment criteria.", documents: "Prepare photo ID, proof of residency when required, prior school/GED transcripts or placement information when applicable, and any program-specific enrollment documents. Do not submit original documents unless the institution specifically requires them.", directionsQuery: "Arizona Education Resources, Arizona" },
  156: { access: "Use the official Valley Metro page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix Metro Area.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Valley Metro, Phoenix Metro Area" },
  157: { access: "Use the official Phoenix Dial-a-Ride page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix, AZ.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Phoenix Dial-a-Ride, Phoenix, AZ" },
  158: { access: "Use the official Valley Metro ADA Paratransit page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-716-2200 to confirm the pickup/service area for Phoenix Metro Area.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Valley Metro ADA Paratransit, Phoenix Metro Area" },
  159: { access: "Use the official Valley Metro RideChoice page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-716-2200 to confirm the pickup/service area for Phoenix Metro Area.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Valley Metro RideChoice, Phoenix Metro Area" },
  160: { access: "Use the official 211 Arizona Transportation page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 211 to confirm the pickup/service area for Arizona.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "211 Arizona Transportation, Arizona" },
  161: { access: "Use the official Valley Metro Reduced Fare page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix Metro Area.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Valley Metro Reduced Fare, Phoenix Metro Area" },
  162: { access: "Use the official City of Phoenix Public Transit page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-262-7433 to confirm the pickup/service area for Phoenix, AZ.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "City of Phoenix Public Transit, Phoenix, AZ" },
  163: { access: "Use the official Phoenix ADA Transit page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix, AZ.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Phoenix ADA Transit, Phoenix, AZ" },
  164: { access: "Use the official Phoenix Senior Transportation page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-262-6631 to confirm the pickup/service area for Phoenix, AZ.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Phoenix Senior Transportation, Phoenix, AZ" },
  165: { access: "Use the official NATIVE HEALTH Transportation page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-279-5262 to confirm the pickup/service area for Phoenix, AZ.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "NATIVE HEALTH Transportation, Phoenix, AZ" },
  166: { access: "Use the official Valley Metro Trip Planner page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix Metro Area.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Valley Metro Trip Planner, Phoenix Metro Area" },
  167: { access: "Use the official Valley Metro Bus Services page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix Metro Area.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Valley Metro Bus Services, Phoenix Metro Area" },
  168: { access: "Use the official Valley Metro Light Rail page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix Metro Area.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Valley Metro Light Rail, Phoenix Metro Area" },
  169: { access: "Use the official Phoenix Transit Accessibility page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix, AZ.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Phoenix Transit Accessibility, Phoenix, AZ" },
  170: { access: "Use the official Valley Metro Accessibility page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-716-2200 to confirm the pickup/service area for Phoenix Metro Area.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Valley Metro Accessibility, Phoenix Metro Area" },
  171: { access: "Use the official Valley Metro Fare Information page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix Metro Area.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Valley Metro Fare Information, Phoenix Metro Area" },
  172: { access: "Use the official Phoenix Transit Programs page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-262-7433 to confirm the pickup/service area for Phoenix, AZ.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Phoenix Transit Programs, Phoenix, AZ" },
  173: { access: "Use the official Phoenix Dial-a-Ride Information page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 602-253-5000 to confirm the pickup/service area for Phoenix, AZ.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Phoenix Dial-a-Ride Information, Phoenix, AZ" },
  174: { access: "Use the official 211 Arizona Transportation Directory page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call 211 to confirm the pickup/service area for Arizona.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "211 Arizona Transportation Directory, Arizona" },
  175: { access: "Use the official Arizona Transportation Resources page to plan, register, or request the transportation service. If eligibility or advance reservation applies, complete that process before traveling; call Check website to confirm the pickup/service area for Arizona.", eligibility: "Eligibility depends on the specific transportation program; some services require disability/ADA eligibility, senior status, enrollment, geographic service-area rules, or advance registration.", documents: "Prepare photo ID and the information required for registration; ADA/paratransit services may require an eligibility application or certification, while reduced-fare programs may require age, disability, student, or income verification.", directionsQuery: "Arizona Transportation Resources, Arizona" },
  176: { access: "Use the official Arizona LIHEAP page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 866-494-1981 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Arizona LIHEAP, Arizona" },
  177: { access: "Use the official Power AZ page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 866-494-1981 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Power AZ, Arizona" },
  178: { access: "Use the official City of Phoenix Crisis Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-534-2433 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "City of Phoenix Crisis Assistance, Phoenix, AZ" },
  179: { access: "Use the official Phoenix Water Financial Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-262-6251 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Phoenix Water Financial Assistance, Phoenix, AZ" },
  180: { access: "Use the official APS Assistance Programs page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-236-8888 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "APS Assistance Programs, Arizona" },
  181: { access: "Use the official SRP Assistance Programs page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-236-8888 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "SRP Assistance Programs, Phoenix Metro Area" },
  182: { access: "Use the official Southwest Gas Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 877-860-6020 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Southwest Gas Assistance, Arizona" },
  183: { access: "Use the official Friendly House Emergency Support page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-257-1870 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Friendly House Emergency Support, Phoenix, AZ" },
  184: { access: "Use the official Lutheran Social Services Utility Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-297-6045 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Lutheran Social Services Utility Assistance, Arizona" },
  185: { access: "Use the official Salvation Army Utility Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-267-4100 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Salvation Army Utility Assistance, Phoenix Metro Area" },
  186: { access: "Use the official Arizona Weatherization Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-771-1000 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Arizona Weatherization Assistance, Arizona" },
  187: { access: "Use the official Mesa Utility Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 480-644-6466 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Mesa Utility Assistance, Mesa, AZ" },
  188: { access: "Use the official Mesa Community Action Network page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 480-833-9200 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Mesa Community Action Network, Mesa, AZ" },
  189: { access: "Use the official Aster Aging Utility Resource Navigation page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 480-964-9014 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Aster Aging Utility Resource Navigation, Mesa, AZ" },
  190: { access: "Use the official 211 Arizona Utility Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 211 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "211 Arizona Utility Assistance, Arizona" },
  191: { access: "Use the official Arizona DES Utility Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 866-494-1981 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Arizona DES Utility Assistance, Arizona" },
  192: { access: "Use the official Arizona Department of Housing Weatherization page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-771-1000 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Arizona Department of Housing Weatherization, Arizona" },
  193: { access: "Use the official Phoenix Water Customer Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-262-6251 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Phoenix Water Customer Assistance, Phoenix, AZ" },
  194: { access: "Use the official Phoenix Crisis Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-534-2433 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Phoenix Crisis Assistance, Phoenix, AZ" },
  195: { access: "Use the official APS Customer Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-236-8888 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "APS Customer Assistance, Arizona" },
  196: { access: "Use the official SRP Customer Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 602-236-8888 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "SRP Customer Assistance, Phoenix Metro Area" },
  197: { access: "Use the official Southwest Gas Customer Assistance page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 877-860-6020 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Southwest Gas Customer Assistance, Arizona" },
  198: { access: "Use the official Arizona Community Action Agencies — Utilities page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call Check website to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Arizona Community Action Agencies — Utilities, Arizona" },
  199: { access: "Use the official Arizona Utility Assistance Directory page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call 211 to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Arizona Utility Assistance Directory, Arizona" },
  200: { access: "Use the official Arizona Basic Needs Resource Search page to review the applicable assistance program and follow its application or customer-assistance instructions. Have your account information available and call Check website to confirm current funding, service-area rules, and required intake steps.", eligibility: "Eligibility depends on the specific assistance program and provider; income, household size, service address, account status, past-due balance, and available funding may be considered.", documents: "Prepare a current utility bill/account number, service address, household income information, photo ID, and any past-due/disconnection notice or benefit documentation requested by the assistance program.", directionsQuery: "Arizona Basic Needs Resource Search, Arizona" }
};

function makeResource(id, category, name, description, website, location = "Arizona", phone = "Check website", cost = "Free or low-cost", spanish = true, free = true, access = "") {
  const detail = RESOURCE_DETAILS[id] || {};
  return { id, category, name:{en:name,es:name}, description:{en:description,es:description}, access:{en:access||detail.access||"Use the official website linked above for current intake instructions.",es:access||detail.access||"Consulta el sitio oficial enlazado arriba para conocer las instrucciones actuales."}, eligibility:{en:detail.eligibility||"Eligibility is determined by the specific program; confirm current requirements with the organization.",es:detail.eligibility||"Los requisitos los determina el programa específico; confirma los requisitos actuales con la organización."}, documents:{en:detail.documents||"Review the official website for the current document checklist.",es:detail.documents||"Consulta el sitio oficial para obtener la lista actual de documentos."}, location, phone, hours:detail.hours||"Check official website", cost, languages:spanish?"English, Spanish":"English", spanish, free, website, directionsQuery:detail.directionsQuery||`${name}, ${location}`, city:location.split(",")[0].trim(), zips:detail.zips||[] };
}

const resources = [

    /* =====================================================
       FOOD — 1–35
    ===================================================== */

    makeResource(
        1,
        "food",
        "St. Mary's Food Bank",
        "Emergency food boxes, food distributions, and hunger-relief services.",
        "https://www.firstfoodbank.org/",
        "Phoenix, AZ",
        "602-242-3663"
    ),

    makeResource(
        2,
        "food",
        "Arizona Food Bank Network",
        "Statewide directory connecting residents with food banks, pantries, and meal programs.",
        "https://azfoodbanks.org/",
        "Arizona",
        "602-528-3434"
    ),

    makeResource(
        3,
        "food",
        "Arizona Nutrition Assistance (SNAP)",
        "Nutrition assistance for eligible low-income households.",
        "https://des.az.gov/services/basic-needs/food/nutrition-assistance",
        "Arizona",
        "855-432-7587"
    ),

    makeResource(
        4,
        "food",
        "Arizona WIC",
        "Nutrition assistance, healthy foods, breastfeeding support, and nutrition education.",
        "https://www.azdhs.gov/prevention/azwic/",
        "Arizona",
        "800-252-5942"
    ),

    makeResource(
        5,
        "food",
        "Double Up Food Bucks Arizona",
        "Helps SNAP shoppers get more fresh fruits and vegetables at participating locations.",
        "https://doubleupaz.org/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        6,
        "food",
        "Desert Mission Food Bank",
        "Food assistance and community support for Phoenix-area residents.",
        "https://www.desertmission.com/",
        "Phoenix, AZ",
        "602-870-6060"
    ),

    makeResource(
        7,
        "food",
        "Phoenix Rescue Mission",
        "Food assistance, meals, and support for people experiencing hardship.",
        "https://phoenixrescuemission.org/",
        "Phoenix, AZ",
        "602-233-3000"
    ),

    makeResource(
        8,
        "food",
        "St. Vincent de Paul Phoenix",
        "Food, meals, and basic-needs assistance.",
        "https://svdpaz.org/",
        "Phoenix, AZ",
        "602-266-4673"
    ),

    makeResource(
        9,
        "food",
        "Andre House",
        "Meals and supportive services for people experiencing homelessness or hardship.",
        "https://www.andrehouse.org/",
        "Phoenix, AZ",
        "602-255-6878"
    ),

    makeResource(
        10,
        "food",
        "FIBCO Family Services",
        "Community assistance including food and family support.",
        "https://www.fibco.org/",
        "Phoenix, AZ",
        "602-272-7300"
    ),

    makeResource(
        11,
        "food",
        "United Food Bank",
        "Food bank serving communities throughout central and eastern Arizona.",
        "https://unitedfoodbank.org/",
        "Mesa, AZ",
        "480-926-4897"
    ),

    makeResource(
        12,
        "food",
        "AZCEND Food Bank",
        "Food assistance and emergency support for Chandler-area households.",
        "https://azcend.org/",
        "Chandler, AZ",
        "480-963-1423"
    ),

    makeResource(
        13,
        "food",
        "Hope for Hunger Food Bank",
        "Food assistance and community programs for families in the Phoenix area.",
        "https://hopeforhunger.org/",
        "Glendale, AZ",
        "623-848-0930"
    ),

    makeResource(
        14,
        "food",
        "Tempe Community Action Agency Food Pantry",
        "Food pantry services for eligible Tempe-area households.",
        "https://tempeaction.org/",
        "Tempe, AZ",
        "480-422-8922"
    ),

    makeResource(
        15,
        "food",
        "TEFAP Arizona",
        "Emergency food assistance distributed through participating organizations.",
        "https://des.az.gov/services/basic-needs/food-assistance/emergency-food-assistance",
        "Arizona",
        "Check website"
    ),

    makeResource(
        16,
        "food",
        "Arizona Commodity Senior Food Program",
        "Monthly food packages for eligible older adults.",
        "https://des.az.gov/services/basic-needs/food-assistance/az-commodity-senior-food-program",
        "Arizona",
        "602-771-2790"
    ),

    makeResource(
        17,
        "food",
        "Phoenix Senior Center Meals",
        "Meal programs and nutrition support for eligible older adults.",
        "https://www.phoenix.gov/administration/departments/humanservices/programs-services/seniors-older-adults.html",
        "Phoenix, AZ",
        "602-262-6631"
    ),

    makeResource(
        18,
        "food",
        "Lutheran Social Services Food Assistance",
        "Food and basic-needs assistance through community programs.",
        "https://www.lss-sw.org/",
        "Arizona",
        "602-297-6045"
    ),

    makeResource(
        19,
        "food",
        "Salvation Army Metro Phoenix Food Assistance",
        "Emergency food and community assistance.",
        "https://www.salvationarmyphoenix.org/",
        "Phoenix Metro Area",
        "602-267-4100"
    ),

    makeResource(
        20,
        "food",
        "NourishPHX",
        "Community food access and nutrition programs in Phoenix.",
        "https://nourishphx.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        21,
        "food",
        "ICNA Relief Arizona",
        "Food pantry and community assistance programs.",
        "https://icnarelief.org/arizona/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        22,
        "food",
        "Arizona Kosher Food Pantry",
        "Food assistance with culturally appropriate food options.",
        "https://azkosherpantry.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        23,
        "food",
        "Farm Express",
        "Mobile fresh-produce market connecting Phoenix neighborhoods with affordable produce.",
        "https://www.phoenix.gov/parks/fitphoenix/farmers-markets",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        24,
        "food",
        "Arizona Self Help",
        "Free screening tool for Arizona health and human-services programs.",
        "https://arizonaselfhelp.org/",
        "Arizona",
        "602-604-0640"
    ),

    makeResource(
        25,
        "food",
        "USDA National Hunger Hotline",
        "National food-assistance referral service.",
        "https://www.fns.usda.gov/national-hunger-hotline",
        "United States",
        "866-348-6479"
    ),

    makeResource(
        26,
        "food",
        "City of Phoenix Food Resources",
        "City directory connecting residents with food banks, nutrition programs, and food resources.",
        "https://www.phoenix.gov/administration/departments/oep/oep-programs/food/food-resources.html",
        "Phoenix, AZ",
        "602-262-3111"
    ),

    makeResource(
        27,
        "food",
        "City of Mesa Food Resources",
        "Food assistance information and local food providers.",
        "https://www.mesaaz.gov/Resident-Resources/Community-Support-Programs",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        28,
        "food",
        "Tempe Food Assistance",
        "Local food pantry and emergency food information.",
        "https://www.tempe.gov/government/community-health-and-human-services/community-resources/tempe-non-profit-organizations",
        "Tempe, AZ",
        "480-350-4311"
    ),

    makeResource(
        29,
        "food",
        "Senior Farmers Market Nutrition Program",
        "Fresh-produce assistance for eligible older adults.",
        "https://des.az.gov/senior-farmers-markets",
        "Arizona",
        "Check website"
    ),

    makeResource(
        30,
        "food",
        "Arizona Farmers Market Nutrition Program",
        "Nutrition benefits supporting access to fresh produce.",
        "https://www.azfmnp.org/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        31,
        "food",
        "Food Bank Locator — Arizona",
        "Search for food banks, pantries, soup kitchens, and emergency food providers.",
        "https://azfoodbanks.org/get-food/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        32,
        "food",
        "Food Assistance — Arizona DES",
        "Arizona food-assistance information including SNAP and related programs.",
        "https://des.az.gov/services/basic-needs/food",
        "Arizona",
        "855-432-7587"
    ),

    makeResource(
        33,
        "food",
        "Food Assistance — 211 Arizona",
        "Searchable directory for food pantries, meals, and food delivery.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        34,
        "food",
        "Phoenix Food Assistance and Community Resources",
        "City resource guide covering food assistance, SNAP, WIC, senior meals, and community food partners.",
        "https://www.phoenix.gov/administration/departments/humanservices/food-assistance-and-community-resources.html",
        "Phoenix, AZ",
        "602-262-3111"
    ),

    makeResource(
        35,
        "food",
        "Arizona Food Assistance Programs",
        "Statewide information about nutrition programs and emergency food resources.",
        "https://des.az.gov/services/basic-needs/food-assistance",
        "Arizona",
        "Check website"
    ),


    /* =====================================================
       HOUSING — 36–60
    ===================================================== */

    makeResource(
        36,
        "housing",
        "City of Phoenix Housing Department",
        "Affordable housing, rental assistance, housing programs, and homelessness resources.",
        "https://www.phoenix.gov/housing",
        "Phoenix, AZ",
        "602-262-6794"
    ),

    makeResource(
        37,
        "housing",
        "Arizona Department of Housing",
        "State housing resources, affordable housing programs, and housing assistance.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        38,
        "housing",
        "HousingSearch.AZ.gov",
        "Searchable directory of affordable and accessible rental housing.",
        "https://housingsearch.az.gov/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        39,
        "housing",
        "211 Arizona Housing Assistance",
        "Connects residents with shelter, rental assistance, and housing programs.",
        "https://211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        40,
        "housing",
        "HOM Inc.",
        "Affordable housing and supportive housing services.",
        "https://www.hominc.com/",
        "Phoenix, AZ",
        "602-265-4646"
    ),

    makeResource(
        41,
        "housing",
        "UMOM New Day Centers",
        "Shelter, housing, family support, and homelessness services.",
        "https://umom.org/",
        "Phoenix, AZ",
        "602-275-7852"
    ),

    makeResource(
        42,
        "housing",
        "Native American Connections",
        "Affordable housing and supportive services.",
        "https://www.nativeconnections.org/",
        "Phoenix, AZ",
        "602-495-3900"
    ),

    makeResource(
        43,
        "housing",
        "Save the Family",
        "Housing and family-stability services.",
        "https://savethefamily.org/",
        "Mesa, AZ",
        "480-898-0228"
    ),

    makeResource(
        44,
        "housing",
        "Chicanos Por La Causa Housing",
        "Housing and economic-development services.",
        "https://cplc.org/",
        "Arizona",
        "602-257-0700"
    ),

    makeResource(
        45,
        "housing",
        "Community Legal Services",
        "Free or low-cost legal assistance including housing and eviction matters.",
        "https://clsaz.org/",
        "Arizona",
        "602-258-3434"
    ),

    makeResource(
        46,
        "housing",
        "City of Mesa Housing Resources",
        "Housing, homelessness, and community-support information.",
        "https://www.mesaaz.gov/Resident-Resources/Housing",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        47,
        "housing",
        "Mesa Homeless Resource Line",
        "Resource navigation for people experiencing homelessness.",
        "https://www.mesaaz.gov/Resident-Resources/Housing/Human-Services/Homeless-Resources",
        "Mesa, AZ",
        "480-644-4673"
    ),

    makeResource(
        48,
        "housing",
        "Arizona Fair Housing Center",
        "Fair-housing education, advocacy, and assistance.",
        "https://azfairhousing.net/",
        "Arizona",
        "602-548-1599"
    ),

    makeResource(
        49,
        "housing",
        "Arizona Community Action Agencies",
        "Local agencies providing housing, emergency, employment, and self-sufficiency services.",
        "https://des.az.gov/CommunityActionAgencies",
        "Arizona",
        "Check website"
    ),

    makeResource(
        50,
        "housing",
        "Arizona Housing Resources",
        "Statewide housing resources and current housing-program information.",
        "https://housing.az.gov/resources",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        51,
        "housing",
        "Phoenix Emergency Housing Resources",
        "City information connecting residents with housing and emergency-support programs.",
        "https://www.phoenix.gov/humanservices",
        "Phoenix, AZ",
        "602-262-6661"
    ),

    makeResource(
        52,
        "housing",
        "Phoenix Homeless Services",
        "Information about shelter, homelessness programs, and supportive services.",
        "https://www.phoenix.gov/humanservices",
        "Phoenix, AZ",
        "602-262-6661"
    ),

    makeResource(
        53,
        "housing",
        "Arizona Rental Assistance Information",
        "Information about current state and local housing-assistance opportunities.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        54,
        "housing",
        "Arizona Landlord and Tenant Resources",
        "Information about rental rights and responsibilities.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        55,
        "housing",
        "Phoenix Eviction Legal Services",
        "Legal information and assistance for eligible Phoenix residents facing housing issues.",
        "https://www.phoenix.gov/humanservices",
        "Phoenix, AZ",
        "602-262-6661"
    ),

    makeResource(
        56,
        "housing",
        "Phoenix Home Repair Assistance",
        "Information about programs that may help eligible residents repair or maintain homes.",
        "https://www.phoenix.gov/humanservices",
        "Phoenix, AZ",
        "602-262-6661"
    ),

    makeResource(
        57,
        "housing",
        "Arizona Weatherization Assistance",
        "Programs designed to improve energy efficiency and reduce household energy costs.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        58,
        "housing",
        "211 Arizona Shelter Search",
        "Search for shelters and housing programs by location.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        59,
        "housing",
        "Mesa Community Support Programs",
        "Mesa information covering housing, utilities, food, and other essential services.",
        "https://www.mesaaz.gov/Resident-Resources/Community-Support-Programs",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        60,
        "housing",
        "Arizona Department of Housing Resources",
        "Current state housing publications, programs, income limits, and housing resources.",
        "https://housing.az.gov/resources",
        "Arizona",
        "602-771-1000"
    ),


    /* =====================================================
       HEALTHCARE — 61–105
    ===================================================== */

    makeResource(
        61,
        "healthcare",
        "AHCCCS",
        "Arizona's Medicaid program for eligible residents.",
        "https://www.azahcccs.gov/",
        "Arizona",
        "602-417-4000"
    ),

    makeResource(
        62,
        "healthcare",
        "NATIVE HEALTH",
        "Community medical, dental, behavioral-health, and family services.",
        "https://www.nativehealthphoenix.org/",
        "Phoenix, AZ",
        "602-279-5262"
    ),

    makeResource(
        63,
        "healthcare",
        "Adelante Healthcare",
        "Community health centers providing affordable healthcare services.",
        "https://adelantehealthcare.com/",
        "Phoenix Metro Area",
        "877-809-5092"
    ),

    makeResource(
        64,
        "healthcare",
        "NOAH",
        "Community primary and behavioral healthcare.",
        "https://noahhelps.org/",
        "Phoenix Metro Area",
        "480-882-4545"
    ),

    makeResource(
        65,
        "healthcare",
        "Mountain Park Health Center",
        "Affordable medical, dental, and behavioral healthcare.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        66,
        "healthcare",
        "Valle del Sol",
        "Community health, behavioral health, and family services.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        67,
        "healthcare",
        "Valleywise Health",
        "Public health system providing hospital, primary, behavioral, and specialty care.",
        "https://valleywisehealth.org/",
        "Phoenix, AZ",
        "602-344-5011"
    ),

    makeResource(
        68,
        "healthcare",
        "Terros Health",
        "Primary care, behavioral health, and community healthcare services.",
        "https://www.terroshealth.org/",
        "Phoenix, AZ",
        "602-685-6000"
    ),

    makeResource(
        69,
        "healthcare",
        "Circle the City",
        "Healthcare services focused on people experiencing homelessness.",
        "https://circlethecity.org/",
        "Phoenix, AZ",
        "602-776-0776"
    ),

    makeResource(
        70,
        "healthcare",
        "Phoenix Allies for Community Health",
        "Community healthcare for people facing barriers to traditional care.",
        "https://www.phoenixpach.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        71,
        "healthcare",
        "Arizona DHS Sliding Fee Clinics",
        "Directory of Arizona clinics offering free or low-cost services.",
        "https://www.azdhs.gov/prevention/health-systems-development/sliding-fee-schedule/index.php",
        "Arizona",
        "602-542-1025"
    ),

    makeResource(
        72,
        "healthcare",
        "Arizona Alliance for Community Health Centers",
        "Directory and information connecting residents with community health centers.",
        "https://aachc.org/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        73,
        "healthcare",
        "Health-e-Arizona Plus",
        "Online application portal for Arizona healthcare and nutrition programs.",
        "https://healthearizonaplus.gov/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        74,
        "healthcare",
        "Healthcare.gov",
        "Health insurance marketplace and financial-assistance information.",
        "https://www.healthcare.gov/",
        "United States",
        "800-318-2596"
    ),

    makeResource(
        75,
        "healthcare",
        "HRSA Find a Health Center",
        "National directory for finding community health centers.",
        "https://findahealthcenter.hrsa.gov/",
        "United States",
        "Check website"
    ),

    makeResource(
        76,
        "healthcare",
        "Wesley Health Center",
        "Community healthcare services in Phoenix.",
        "https://wesleycommunitycenter.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        77,
        "healthcare",
        "Neighborhood Christian Clinic",
        "Healthcare services for people facing financial or insurance barriers.",
        "https://www.neighborhoodchristianclinic.org/",
        "Phoenix, AZ",
        "Check website"
    ),

    makeResource(
        78,
        "healthcare",
        "Mission of Mercy Arizona",
        "Free healthcare and dental services through community programs.",
        "https://www.amissionofmercy.org/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        79,
        "healthcare",
        "Maricopa County Public Health",
        "Public-health clinics, prevention, immunizations, and community health programs.",
        "https://www.maricopa.gov/5302/Public-Health",
        "Maricopa County, AZ",
        "602-506-6767"
    ),

    makeResource(
        80,
        "healthcare",
        "Cover Arizona",
        "Free assistance navigating health insurance and coverage options.",
        "https://coveraz.org/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        81,
        "healthcare",
        "Phoenix Indian Medical Center",
        "Healthcare services through the Indian Health Service.",
        "https://www.ihs.gov/phoenix/",
        "Phoenix, AZ",
        "602-263-1200"
    ),

    makeResource(
        82,
        "healthcare",
        "Southwest Human Development",
        "Family, child-development, early-intervention, and community support.",
        "https://www.swhd.org/",
        "Phoenix, AZ",
        "602-266-5976"
    ),

    makeResource(
        83,
        "healthcare",
        "Raising Special Kids",
        "Information, support, and advocacy for families of children with disabilities.",
        "https://raisingspecialkids.org/",
        "Arizona",
        "602-242-4366"
    ),

    makeResource(
        84,
        "healthcare",
        "Arizona Early Intervention Program",
        "Early-intervention services for eligible young children.",
        "https://des.az.gov/services/developmental-disabilities/early-intervention",
        "Arizona",
        "Check website"
    ),

    makeResource(
        85,
        "healthcare",
        "Family Involvement Center",
        "Family-focused behavioral-health and support services.",
        "https://www.familyinvolvementcenter.org/",
        "Arizona",
        "602-412-4095"
    ),

    makeResource(
        86,
        "healthcare",
        "Community Bridges",
        "Behavioral-health, recovery, housing, and supportive services.",
        "https://communitybridgesaz.org/",
        "Arizona",
        "877-931-9142"
    ),

    makeResource(
        87,
        "healthcare",
        "Southwest Behavioral & Health Services",
        "Behavioral-health and community-support programs.",
        "https://www.sbhservices.org/",
        "Arizona",
        "602-265-8338"
    ),

    makeResource(
        88,
        "healthcare",
        "Copa Health",
        "Behavioral health, rehabilitation, and supportive services.",
        "https://copahealth.org/",
        "Arizona",
        "480-969-3800"
    ),

    makeResource(
        89,
        "healthcare",
        "La Frontera EMPACT",
        "Behavioral-health, family, and community services.",
        "https://lafrontera-empa.org/",
        "Arizona",
        "480-784-1514"
    ),

    makeResource(
        90,
        "healthcare",
        "NOAH Desert Mission Health Center",
        "Community healthcare services through NOAH.",
        "https://noahhelps.org/",
        "Phoenix, AZ",
        "480-882-4545"
    ),

    makeResource(
        91,
        "healthcare",
        "NOAH Palomino Health Center",
        "Primary and behavioral healthcare.",
        "https://noahhelps.org/",
        "Phoenix Metro Area",
        "480-882-4545"
    ),

    makeResource(
        92,
        "healthcare",
        "NOAH Venado Valley",
        "Community healthcare through the NOAH network.",
        "https://noahhelps.org/",
        "Phoenix, AZ",
        "480-882-4545"
    ),

    makeResource(
        93,
        "healthcare",
        "Mountain Park — Baseline",
        "Community medical, dental, and behavioral-health services.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        94,
        "healthcare",
        "Mountain Park — Gateway",
        "Affordable community healthcare services.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        95,
        "healthcare",
        "Mountain Park — Balsz",
        "Community healthcare services including pediatric care.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        96,
        "healthcare",
        "Mountain Park — Christown",
        "Community healthcare services including pediatric care.",
        "https://mountainparkhealth.org/",
        "Phoenix, AZ",
        "602-243-7277"
    ),

    makeResource(
        97,
        "healthcare",
        "Adelante — Central",
        "Community health-center services in central Phoenix.",
        "https://adelantehealthcare.com/",
        "Phoenix, AZ",
        "877-809-5092"
    ),

    makeResource(
        98,
        "healthcare",
        "Adelante — Metro Parkway",
        "Community healthcare services in north Phoenix.",
        "https://adelantehealthcare.com/",
        "Phoenix, AZ",
        "877-809-5092"
    ),

    makeResource(
        99,
        "healthcare",
        "Valle del Sol — Maryvale",
        "Community healthcare and behavioral-health services.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        100,
        "healthcare",
        "Valle del Sol — 7th Street",
        "Community healthcare services in central Phoenix.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        101,
        "healthcare",
        "Valle del Sol — 17th Street",
        "Community healthcare services in Phoenix.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        102,
        "healthcare",
        "Valle del Sol — 1st Avenue",
        "Community healthcare services in south Phoenix.",
        "https://www.valledelsol.com/",
        "Phoenix, AZ",
        "602-258-6797"
    ),

    makeResource(
        103,
        "healthcare",
        "Terros Health — McDowell",
        "Primary and behavioral healthcare services.",
        "https://www.terroshealth.org/",
        "Phoenix, AZ",
        "602-685-6000"
    ),

    makeResource(
        104,
        "healthcare",
        "Terros Health — 23rd Avenue",
        "Community healthcare services.",
        "https://www.terroshealth.org/",
        "Phoenix, AZ",
        "602-685-6000"
    ),

    makeResource(
        105,
        "healthcare",
        "Terros Health — 27th Avenue",
        "Community healthcare and behavioral-health services.",
        "https://www.terroshealth.org/",
        "Phoenix, AZ",
        "602-685-6000"
    ),


    /* =====================================================
       JOBS — 106–130
    ===================================================== */

    makeResource(
        106,
        "jobs",
        "ARIZONA@WORK",
        "Free employment services, career counseling, job search, and training.",
        "https://arizonaatwork.com/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        107,
        "jobs",
        "Arizona DES Employment Services",
        "Job search, resume, interview, and employment support.",
        "https://des.az.gov/services/employment",
        "Arizona",
        "602-542-6046"
    ),

    makeResource(
        108,
        "jobs",
        "Goodwill of Central and Northern Arizona",
        "Employment services, career training, and job support.",
        "https://www.goodwillaz.org/",
        "Arizona",
        "602-535-4000"
    ),

    makeResource(
        109,
        "jobs",
        "St. Joseph the Worker",
        "Employment assistance and job placement services.",
        "https://www.stjosephtheworker.org/",
        "Phoenix, AZ",
        "602-417-9854"
    ),

    makeResource(
        110,
        "jobs",
        "Fresh Start Women's Foundation",
        "Career development, education, and employment support.",
        "https://freshstartwomen.org/",
        "Phoenix, AZ",
        "602-252-8494"
    ),

    makeResource(
        111,
        "jobs",
        "Friendly House",
        "Employment, education, family, and community support.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        112,
        "jobs",
        "Career Connectors",
        "Career networking, workshops, and employment resources.",
        "https://careerconnectors.org/",
        "Phoenix Metro Area",
        "Check website"
    ),

    makeResource(
        113,
        "jobs",
        "Per Scholas",
        "Free technology training and career development.",
        "https://perscholas.org/",
        "Arizona",
        "Check website",
        false
    ),

    makeResource(
        114,
        "jobs",
        "City of Phoenix Jobs",
        "Employment opportunities with the City of Phoenix.",
        "https://www.phoenix.gov/jobs",
        "Phoenix, AZ",
        "Check website",
        false
    ),

    makeResource(
        115,
        "jobs",
        "Chicanos Por La Causa Employment Services",
        "Employment, workforce, and economic-opportunity programs.",
        "https://cplc.org/",
        "Arizona",
        "602-257-0700"
    ),

    makeResource(
        116,
        "jobs",
        "Maricopa County Workforce Development",
        "Workforce training, employment, and career services.",
        "https://www.maricopa.gov/3725/Workforce-Development-ProgramsServices",
        "Maricopa County, AZ",
        "602-506-2419"
    ),

    makeResource(
        117,
        "jobs",
        "Mesa Workforce Center",
        "Employment and career support for Mesa-area job seekers.",
        "https://www.mesaaz.gov/Resident-Resources/Workforce-Development",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        118,
        "jobs",
        "Tempe Workforce Resources",
        "Employment and workforce information for Tempe residents.",
        "https://www.tempe.gov/government/community-health-and-human-services/wellbeing-and-empowerment/employment-services",
        "Tempe, AZ",
        "480-350-4311"
    ),

    makeResource(
        119,
        "jobs",
        "Arizona Self Help — Employment Screening",
        "Free screening tool connecting households with assistance programs.",
        "https://arizonaselfhelp.org/",
        "Arizona",
        "602-604-0640"
    ),

    makeResource(
        120,
        "jobs",
        "ARIZONA@WORK Youth Services",
        "Career preparation, employment, and training for eligible young people.",
        "https://arizonaatwork.com/locations/city-phoenix/youth-job-seekers",
        "Arizona",
        "Check website"
    ),

    makeResource(
        121,
        "jobs",
        "Arizona Job Connection",
        "Online employment and career resources.",
        "https://arizonaatwork.com/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        122,
        "jobs",
        "DES Job Search Resources",
        "Employment resources and workforce services through Arizona DES.",
        "https://des.az.gov/services/employment",
        "Arizona",
        "602-542-6046"
    ),

    makeResource(
        123,
        "jobs",
        "Arizona Community Action Agencies — Employment",
        "Local agencies helping households secure and maintain employment.",
        "https://des.az.gov/CommunityActionAgencies",
        "Arizona",
        "Check website"
    ),

    makeResource(
        124,
        "jobs",
        "St. Joseph the Worker Employment Services",
        "Job placement and workforce assistance.",
        "https://www.stjosephtheworker.org/",
        "Phoenix, AZ",
        "602-417-9854"
    ),

    makeResource(
        125,
        "jobs",
        "Goodwill Career Services",
        "Career preparation, employment support, and training.",
        "https://www.goodwillaz.org/",
        "Arizona",
        "602-535-4000"
    ),

    makeResource(
        126,
        "jobs",
        "Fresh Start Career Development",
        "Career development and workforce support.",
        "https://freshstartwomen.org/",
        "Phoenix, AZ",
        "602-252-8494"
    ),

    makeResource(
        127,
        "jobs",
        "Friendly House Workforce Programs",
        "Workforce and employment support.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        128,
        "jobs",
        "CPLC Workforce Programs",
        "Workforce development and economic opportunity programs.",
        "https://cplc.org/",
        "Arizona",
        "602-257-0700"
    ),

    makeResource(
        129,
        "jobs",
        "Career Connectors Events",
        "Free career events and networking opportunities.",
        "https://careerconnectors.org/",
        "Phoenix Metro Area",
        "Check website"
    ),

    makeResource(
        130,
        "jobs",
        "Arizona Employment Services",
        "Statewide employment and workforce information.",
        "https://des.az.gov/services/employment",
        "Arizona",
        "602-542-6046"
    ),


    /* =====================================================
       EDUCATION — 131–155
    ===================================================== */

    makeResource(
        131,
        "education",
        "Arizona Adult Education",
        "Adult education, high-school equivalency, ESL, and career preparation.",
        "https://www.azed.gov/adultedservices/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        132,
        "education",
        "Rio Salado College Adult Education",
        "GED preparation, English learning, and adult education.",
        "https://www.riosalado.edu/start-rio/adult-education",
        "Maricopa County, AZ",
        "480-517-8110"
    ),

    makeResource(
        133,
        "education",
        "Phoenix Public Library",
        "Free computers, literacy programs, homework support, classes, and educational resources.",
        "https://www.phoenixpubliclibrary.org/",
        "Phoenix, AZ",
        "602-262-4636"
    ),

    makeResource(
        134,
        "education",
        "Literacy Phoenix",
        "Free literacy and English-learning programs for adults.",
        "https://literacyphoenix.org/",
        "Phoenix, AZ",
        "602-274-3439"
    ),

    makeResource(
        135,
        "education",
        "Job Corps",
        "Free education and career training for eligible young people.",
        "https://www.jobcorps.gov/",
        "United States",
        "800-733-5627"
    ),

    makeResource(
        136,
        "education",
        "Maricopa Community Colleges",
        "Community-college education, certificates, degrees, and career programs.",
        "https://www.maricopa.edu/",
        "Maricopa County, AZ",
        "480-731-8000"
    ),

    makeResource(
        137,
        "education",
        "GateWay Community College",
        "Career and technical education, certificates, and degrees.",
        "https://www.gatewaycc.edu/",
        "Phoenix, AZ",
        "602-286-8000"
    ),

    makeResource(
        138,
        "education",
        "Friendly House Education Programs",
        "English-language, education, family, and workforce programs.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        139,
        "education",
        "ARIZONA@WORK Youth Education Services",
        "Education, career preparation, and training for eligible young people.",
        "https://arizonaatwork.com/locations/city-phoenix/youth-job-seekers",
        "Arizona",
        "Check website"
    ),

    makeResource(
        140,
        "education",
        "Phoenix Head Start",
        "Early childhood education and family support.",
        "https://www.phoenix.gov/headstart",
        "Phoenix, AZ",
        "602-262-4040"
    ),

    makeResource(
        141,
        "education",
        "Arizona Literacy Resources",
        "Statewide information about adult literacy and educational programs.",
        "https://www.azed.gov/adultedservices/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        142,
        "education",
        "Phoenix Library Homework Help",
        "Homework and learning resources through Phoenix Public Library.",
        "https://www.phoenixpubliclibrary.org/",
        "Phoenix, AZ",
        "602-262-4636"
    ),

    makeResource(
        143,
        "education",
        "Phoenix Library Computer Access",
        "Free public computers and technology access.",
        "https://www.phoenixpubliclibrary.org/",
        "Phoenix, AZ",
        "602-262-4636"
    ),

    makeResource(
        144,
        "education",
        "Phoenix Library Literacy Programs",
        "Literacy and educational programming.",
        "https://www.phoenixpubliclibrary.org/",
        "Phoenix, AZ",
        "602-262-4636"
    ),

    makeResource(
        145,
        "education",
        "Rio Salado GED Resources",
        "Adult education and high-school equivalency preparation.",
        "https://www.riosalado.edu/start-rio/adult-education",
        "Maricopa County, AZ",
        "480-517-8110"
    ),

    makeResource(
        146,
        "education",
        "Rio Salado English Programs",
        "English-language learning for eligible adult students.",
        "https://www.riosalado.edu/start-rio/adult-education",
        "Maricopa County, AZ",
        "480-517-8110"
    ),

    makeResource(
        147,
        "education",
        "Arizona Adult Education ESL",
        "English-language learning and adult education.",
        "https://www.azed.gov/adultedservices/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        148,
        "education",
        "Arizona Adult Education Career Preparation",
        "Career-focused adult education.",
        "https://www.azed.gov/adultedservices/",
        "Arizona",
        "Check website"
    ),

    makeResource(
        149,
        "education",
        "Maricopa Community Colleges Career Programs",
        "Career and technical programs across Maricopa County.",
        "https://www.maricopa.edu/",
        "Maricopa County, AZ",
        "480-731-8000"
    ),

    makeResource(
        150,
        "education",
        "Maricopa Community Colleges Certificates",
        "Certificate programs for career preparation.",
        "https://www.maricopa.edu/",
        "Maricopa County, AZ",
        "480-731-8000"
    ),

    makeResource(
        151,
        "education",
        "GateWay Career Training",
        "Career and technical education programs.",
        "https://www.gatewaycc.edu/",
        "Phoenix, AZ",
        "602-286-8000"
    ),

    makeResource(
        152,
        "education",
        "Job Corps Career Training",
        "Education and vocational training for eligible young people.",
        "https://www.jobcorps.gov/",
        "United States",
        "800-733-5627"
    ),

    makeResource(
        153,
        "education",
        "Phoenix Head Start Birth to Five",
        "Early childhood development, education, nutrition, and family support.",
        "https://www.phoenix.gov/headstart",
        "Phoenix, AZ",
        "602-262-4040"
    ),

    makeResource(
        154,
        "education",
        "Friendly House English Classes",
        "English-language and educational programming.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        155,
        "education",
        "Arizona Education Resources",
        "Statewide information about adult education and educational services.",
        "https://www.azed.gov/",
        "Arizona",
        "Check website"
    ),


    /* =====================================================
       TRANSPORTATION — 156–175
    ===================================================== */

    makeResource(
        156,
        "transportation",
        "Valley Metro",
        "Bus and light-rail transportation throughout the Phoenix metro area.",
        "https://www.valleymetro.org/",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        157,
        "transportation",
        "Phoenix Dial-a-Ride",
        "Shared-ride transportation for eligible Phoenix residents with disabilities.",
        "https://www.phoenix.gov/publictransit/transit-programs/dial-a-ride",
        "Phoenix, AZ",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        158,
        "transportation",
        "Valley Metro ADA Paratransit",
        "Accessible transportation for eligible riders.",
        "https://www.valleymetro.org/accessibility",
        "Phoenix Metro Area",
        "602-716-2200",
        true,
        false
    ),

    makeResource(
        159,
        "transportation",
        "Valley Metro RideChoice",
        "Transportation option for eligible riders.",
        "https://www.valleymetro.org/accessibility/ridechoice",
        "Phoenix Metro Area",
        "602-716-2200",
        true,
        false
    ),

    makeResource(
        160,
        "transportation",
        "211 Arizona Transportation",
        "Connects residents with local transportation programs.",
        "https://211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        161,
        "transportation",
        "Valley Metro Reduced Fare",
        "Reduced transit fares for qualifying riders.",
        "https://www.valleymetro.org/fares",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        162,
        "transportation",
        "City of Phoenix Public Transit",
        "Phoenix bus routes, transportation programs, and services.",
        "https://www.phoenix.gov/publictransit",
        "Phoenix, AZ",
        "602-262-7433",
        true,
        false
    ),

    makeResource(
        163,
        "transportation",
        "Phoenix ADA Transit",
        "Accessible transportation information and services.",
        "https://www.phoenix.gov/publictransit/ada",
        "Phoenix, AZ",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        164,
        "transportation",
        "Phoenix Senior Transportation",
        "Transportation assistance for eligible seniors.",
        "https://www.phoenix.gov/administration/departments/humanservices/programs-services/seniors-older-adults.html",
        "Phoenix, AZ",
        "602-262-6631"
    ),

    makeResource(
        165,
        "transportation",
        "NATIVE HEALTH Transportation",
        "Transportation assistance connected with eligible NATIVE HEALTH services.",
        "https://www.nativehealthphoenix.org/services/request-transportation/",
        "Phoenix, AZ",
        "602-279-5262"
    ),

    makeResource(
        166,
        "transportation",
        "Valley Metro Trip Planner",
        "Online public transportation trip-planning tool.",
        "https://www.valleymetro.org/",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        167,
        "transportation",
        "Valley Metro Bus Services",
        "Local and regional bus transportation.",
        "https://www.valleymetro.org/",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        168,
        "transportation",
        "Valley Metro Light Rail",
        "Light-rail transportation throughout the Phoenix area.",
        "https://www.valleymetro.org/",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        169,
        "transportation",
        "Phoenix Transit Accessibility",
        "Accessibility information for Phoenix public transportation.",
        "https://www.phoenix.gov/publictransit/ada",
        "Phoenix, AZ",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        170,
        "transportation",
        "Valley Metro Accessibility",
        "Accessibility and mobility information.",
        "https://www.valleymetro.org/accessibility",
        "Phoenix Metro Area",
        "602-716-2200",
        true,
        false
    ),

    makeResource(
        171,
        "transportation",
        "Valley Metro Fare Information",
        "Current public transportation fare information.",
        "https://www.valleymetro.org/fares",
        "Phoenix Metro Area",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        172,
        "transportation",
        "Phoenix Transit Programs",
        "City transportation programs and services.",
        "https://www.phoenix.gov/publictransit",
        "Phoenix, AZ",
        "602-262-7433",
        true,
        false
    ),

    makeResource(
        173,
        "transportation",
        "Phoenix Dial-a-Ride Information",
        "Information and registration for accessible shared transportation.",
        "https://www.phoenix.gov/publictransit/transit-programs/dial-a-ride",
        "Phoenix, AZ",
        "602-253-5000",
        true,
        false
    ),

    makeResource(
        174,
        "transportation",
        "211 Arizona Transportation Directory",
        "Searchable transportation assistance directory.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        175,
        "transportation",
        "Arizona Transportation Resources",
        "Statewide information about transportation services.",
        "https://az.gov/transportation-resources",
        "Arizona",
        "Check website"
    ),


    /* =====================================================
       UTILITIES — 176–200
    ===================================================== */

    makeResource(
        176,
        "utilities",
        "Arizona LIHEAP",
        "Utility assistance for eligible low-income households.",
        "https://des.az.gov/liheap",
        "Arizona",
        "866-494-1981"
    ),

    makeResource(
        177,
        "utilities",
        "Power AZ",
        "Arizona utility-assistance information.",
        "https://des.az.gov/liheap",
        "Arizona",
        "866-494-1981"
    ),

    makeResource(
        178,
        "utilities",
        "City of Phoenix Crisis Assistance",
        "Emergency assistance that may help households facing utility or basic-needs hardship.",
        "https://www.phoenix.gov/administration/departments/humanservices/programs-services/crisis-assistance.html",
        "Phoenix, AZ",
        "602-534-2433"
    ),

    makeResource(
        179,
        "utilities",
        "Phoenix Water Financial Assistance",
        "Financial assistance for eligible Phoenix water customers.",
        "https://www.phoenix.gov/administration/departments/waterservices/city-services-bill/financial-assistance-for-phoenix-water-customers.html",
        "Phoenix, AZ",
        "602-262-6251"
    ),

    makeResource(
        180,
        "utilities",
        "APS Assistance Programs",
        "Utility assistance and bill-support programs.",
        "https://www.aps.com/",
        "Arizona",
        "602-236-8888"
    ),

    makeResource(
        181,
        "utilities",
        "SRP Assistance Programs",
        "Bill assistance and energy-support programs.",
        "https://www.srpnet.com/",
        "Phoenix Metro Area",
        "602-236-8888"
    ),

    makeResource(
        182,
        "utilities",
        "Southwest Gas Assistance",
        "Payment-assistance programs for eligible customers.",
        "https://www.swgas.com/",
        "Arizona",
        "877-860-6020"
    ),

    makeResource(
        183,
        "utilities",
        "Friendly House Emergency Support",
        "Emergency community support that may include basic household needs.",
        "https://friendlyhouse.org/",
        "Phoenix, AZ",
        "602-257-1870"
    ),

    makeResource(
        184,
        "utilities",
        "Lutheran Social Services Utility Assistance",
        "Community assistance and support for households facing hardship.",
        "https://www.lss-sw.org/",
        "Arizona",
        "602-297-6045"
    ),

    makeResource(
        185,
        "utilities",
        "Salvation Army Utility Assistance",
        "Emergency assistance that may include utility-related needs.",
        "https://www.salvationarmyphoenix.org/",
        "Phoenix Metro Area",
        "602-267-4100"
    ),

    makeResource(
        186,
        "utilities",
        "Arizona Weatherization Assistance",
        "Programs that can help eligible households reduce energy costs through weatherization.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        187,
        "utilities",
        "Mesa Utility Assistance",
        "Mesa information about utility assistance and energy-saving programs.",
        "https://www.mesaaz.gov/Resident-Resources/Community-Support-Programs",
        "Mesa, AZ",
        "480-644-6466"
    ),

    makeResource(
        188,
        "utilities",
        "Mesa Community Action Network",
        "Utility-payment assistance and weatherization support.",
        "https://www.mesaaz.gov/Resident-Resources/Community-Support-Programs",
        "Mesa, AZ",
        "480-833-9200"
    ),

    makeResource(
        189,
        "utilities",
        "Aster Aging Utility Resource Navigation",
        "Resource navigation and benefits assistance for older adults.",
        "https://www.asteraz.org/",
        "Mesa, AZ",
        "480-964-9014"
    ),

    makeResource(
        190,
        "utilities",
        "211 Arizona Utility Assistance",
        "Searchable directory for utility and financial assistance.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        191,
        "utilities",
        "Arizona DES Utility Assistance",
        "State utility-assistance information.",
        "https://des.az.gov/services/basic-needs/utility-assistance",
        "Arizona",
        "866-494-1981"
    ),

    makeResource(
        192,
        "utilities",
        "Arizona Department of Housing Weatherization",
        "Housing-related energy-efficiency assistance.",
        "https://housing.az.gov/",
        "Arizona",
        "602-771-1000"
    ),

    makeResource(
        193,
        "utilities",
        "Phoenix Water Customer Assistance",
        "City information about financial assistance for water customers.",
        "https://www.phoenix.gov/administration/departments/waterservices/city-services-bill/financial-assistance-for-phoenix-water-customers.html",
        "Phoenix, AZ",
        "602-262-6251"
    ),

    makeResource(
        194,
        "utilities",
        "Phoenix Crisis Assistance",
        "Emergency support and case-management resources.",
        "https://www.phoenix.gov/administration/departments/humanservices/programs-services/crisis-assistance.html",
        "Phoenix, AZ",
        "602-534-2433"
    ),

    makeResource(
        195,
        "utilities",
        "APS Customer Assistance",
        "Information about assistance programs for APS customers.",
        "https://www.aps.com/",
        "Arizona",
        "602-236-8888"
    ),

    makeResource(
        196,
        "utilities",
        "SRP Customer Assistance",
        "Information about SRP bill-assistance programs.",
        "https://www.srpnet.com/",
        "Phoenix Metro Area",
        "602-236-8888"
    ),

    makeResource(
        197,
        "utilities",
        "Southwest Gas Customer Assistance",
        "Information about gas-payment assistance.",
        "https://www.swgas.com/",
        "Arizona",
        "877-860-6020"
    ),

    makeResource(
        198,
        "utilities",
        "Arizona Community Action Agencies — Utilities",
        "Local agencies providing utility, weatherization, and emergency assistance.",
        "https://des.az.gov/CommunityActionAgencies",
        "Arizona",
        "Check website"
    ),

    makeResource(
        199,
        "utilities",
        "Arizona Utility Assistance Directory",
        "Statewide search and referral information for assistance programs.",
        "https://search.211arizona.org/",
        "Arizona",
        "211"
    ),

    makeResource(
        200,
        "utilities",
        "Arizona Basic Needs Resource Search",
        "Statewide resource search for utility and other basic-needs assistance.",
        "https://findservices.az.gov/",
        "Arizona",
        "Check website"
    )

];

const categoryLabels={en:{food:"Food",housing:"Housing",healthcare:"Healthcare",jobs:"Jobs",education:"Education",transportation:"Transportation",utilities:"Utilities"},es:{food:"Alimentos",housing:"Vivienda",healthcare:"Salud",jobs:"Empleo",education:"Educación",transportation:"Transporte",utilities:"Servicios"}};
let currentLanguage="en", currentCategory="all", currentZip="";

/*
   ZIP LOCATION DATA
   -----------------
   The old version only used broad 3-digit ZIP prefixes and then SORTED
   resources. That meant entering a ZIP did not actually filter the list.
   This version first identifies the ZIP's city/area and then FILTERS the
   directory to resources serving that city/metro area. Statewide resources
   are shown only when the ZIP has no matching local resources, so a user is
   never left with an empty directory just because a program is statewide.
*/
const ZIP_CITY_RULES = [
  { test:/^850\d\d$/, cities:["Phoenix"], label:"Phoenix" },
  { test:/^851(18|19|20|21|22|23|27|28|32|35|37|40|41|42|43|44|45|47|48|49)$/, cities:["Casa Grande","Apache Junction","Maricopa","Queen Creek","Florence","Coolidge","Eloy"], label:"Pinal County / Southeast Valley" },
  { test:/^8520[1-9]$|^8521[0-6]$/, cities:["Mesa"], label:"Mesa" },
  { test:/^8522[0-9]$|^8523[0-9]$/, cities:["Mesa","Gilbert"], label:"Mesa / Gilbert" },
  { test:/^8524[0-9]$/, cities:["Chandler","Gilbert"], label:"Chandler / Gilbert" },
  { test:/^8525[0-9]$/, cities:["Scottsdale","Paradise Valley"], label:"Scottsdale / Paradise Valley" },
  { test:/^8526[0-9]$/, cities:["Scottsdale","Fountain Hills"], label:"Scottsdale / Fountain Hills" },
  { test:/^8527[0-9]$/, cities:["Mesa","Apache Junction"], label:"Mesa / Apache Junction" },
  { test:/^8528[0-9]$/, cities:["Tempe"], label:"Tempe" },
  { test:/^8529[0-9]$/, cities:["Gilbert","Mesa","Chandler"], label:"Gilbert / Mesa / Chandler" },
  { test:/^8530[1-9]$|^8531[0-9]$/, cities:["Glendale"], label:"Glendale" },
  { test:/^8532[0-9]$/, cities:["Avondale","Goodyear","Tolleson"], label:"West Valley" },
  { test:/^8533[0-9]$/, cities:["Goodyear","Avondale","Litchfield Park"], label:"Goodyear / Avondale / Litchfield Park" },
  { test:/^8534[0-9]$/, cities:["Peoria","Glendale","Litchfield Park"], label:"Peoria / Glendale" },
  { test:/^8535[0-9]$/, cities:["Tolleson","Goodyear","Avondale"], label:"Tolleson / Goodyear / Avondale" },
  { test:/^8536[0-9]$/, cities:["Goodyear","Buckeye"], label:"Goodyear / Buckeye" },
  { test:/^8537[0-9]$/, cities:["Peoria","Surprise","Glendale"], label:"Peoria / Surprise / Glendale" },
  { test:/^8538[0-9]$/, cities:["Peoria","Surprise"], label:"Peoria / Surprise" },
  { test:/^8539[0-9]$/, cities:["Goodyear","Avondale","Litchfield Park"], label:"Goodyear / Avondale / Litchfield Park" },
  { test:/^856[0-9]{2}$/, cities:["Tucson","Southern Arizona"], label:"Tucson / Southern Arizona" },
  { test:/^857[0-9]{2}$/, cities:["Tucson"], label:"Tucson" },
  { test:/^860[0-9]{2}$/, cities:["Flagstaff","Northern Arizona"], label:"Flagstaff / Northern Arizona" },
  { test:/^863[0-9]{2}$/, cities:["Prescott","Northern Arizona"], label:"Prescott / Northern Arizona" },
  { test:/^864[0-9]{2}$/, cities:["Kingman","Northern Arizona"], label:"Kingman" },
  { test:/^859[0-9]{2}$/, cities:["Show Low","Northern Arizona"], label:"Show Low / Northern Arizona" },
  { test:/^855[0-9]{2}$/, cities:["Globe","Payson","Eastern Arizona"], label:"Globe / Payson" },
  { test:/^865[0-9]{2}$/, cities:["Northern Arizona"], label:"Northern Arizona" }
];

const CITY_ALIASES={
  "phoenix":["phoenix"],
  "mesa":["mesa"],
  "tempe":["tempe"],
  "scottsdale":["scottsdale"],
  "chandler":["chandler"],
  "gilbert":["gilbert"],
  "glendale":["glendale"],
  "peoria":["peoria"],
  "avondale":["avondale"],
  "goodyear":["goodyear"],
  "surprise":["surprise"],
  "buckeye":["buckeye"],
  "tolleson":["tolleson"],
  "litchfield park":["litchfield park"],
  "apache junction":["apache junction"],
  "queen creek":["queen creek"],
  "maricopa":["maricopa"],
  "tucson":["tucson"],
  "flagstaff":["flagstaff"],
  "prescott":["prescott"],
  "kingman":["kingman"],
  "show low":["show low"],
  "southern arizona":["southern arizona","tucson"],
  "northern arizona":["northern arizona","flagstaff","prescott","kingman","show low"],
  "eastern arizona":["eastern arizona","globe","payson"]
};

function escapeHTML(v){return String(v??"").replace(/[&<>'"]+/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]));}
function normalizeURL(url){try{const u=new URL(url);return ["http:","https:"].includes(u.protocol)?u.href:"#";}catch{return "#";}}
function phoneHref(p){const v=String(p||"").replace(/[^0-9+]/g,"");return v?`tel:${v}`:"#";}
function createDirectionsURL(r){
  const query=r.directionsQuery || `${r.name.en}, ${r.location}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
function getZipArea(zip){
  const rule=ZIP_CITY_RULES.find(x=>x.test.test(zip));
  return rule ? rule.label : "Arizona";
}
function getZipCities(zip){
  const rule=ZIP_CITY_RULES.find(x=>x.test.test(zip));
  return rule ? rule.cities : [];
}
function normalizedLocation(r){return `${r.location||""} ${r.city||""}`.toLowerCase();}
function resourceMatchesZip(r,zip){
  if(!zip) return true;
  if(Array.isArray(r.zips)&&r.zips.includes(zip)) return true;
  const loc=normalizedLocation(r);
  const cities=getZipCities(zip).map(x=>x.toLowerCase());
  if(cities.some(city=>CITY_ALIASES[city]?.some(alias=>loc.includes(alias)))) return true;
  // Metro-wide listings serve the Phoenix metro area and are relevant to
  // Phoenix, East Valley, and West Valley ZIPs.
  if(/phoenix metro area|maricopa county/.test(loc)) return /^85[01-3]\d\d$/.test(zip);
  // A statewide listing is a fallback only when there are no local results.
  return false;
}
function isStatewideResource(r){
  const loc=normalizedLocation(r);
  return /(^|\s)arizona(\s|$)|statewide|united states/.test(loc) && !/phoenix|mesa|tempe|scottsdale|chandler|gilbert|glendale|peoria|avondale|goodyear|surprise|buckeye|tolleson|tucson|flagstaff|prescott|kingman/.test(loc);
}
function zipMatchScore(r,zip){
  if(!zip) return 0;
  if(Array.isArray(r.zips)&&r.zips.includes(zip)) return 0;
  if(resourceMatchesZip(r,zip)) return 1;
  if(isStatewideResource(r)) return 2;
  return 3;
}
function setCategory(c,b){currentCategory=c;document.querySelectorAll(".category-button").forEach(x=>x.classList.remove("active"));if(b)b.classList.add("active");renderResources();}
function findByZip(){
  const i=document.getElementById("zipCode"),z=i.value.replace(/\D/g,"").slice(0,5);
  i.value=z;
  if(!/^\d{5}$/.test(z)){
    document.getElementById("zipMessage").textContent=currentLanguage==="en"?"Enter a valid 5-digit ZIP code.":"Ingresa un código postal válido de 5 dígitos.";
    i.focus();return;
  }
  currentZip=z;
  const localCount=resources.filter(r=>resourceMatchesZip(r,z)).length;
  const area=getZipArea(z);
  document.getElementById("zipMessage").textContent=localCount
    ? (currentLanguage==="en"?`ZIP ${z} matched ${localCount} local/area resources serving ${area}. Turn on “Include statewide resources” for Arizona-wide programs too.`:`El código ${z} coincide con ${localCount} recursos locales/de área que sirven a ${area}. Activa “Incluir recursos estatales” para ver también programas de todo Arizona.`)
    : (currentLanguage==="en"?`No specifically local listings were found for ZIP ${z}. Showing statewide resources that may serve your area.`:`No se encontraron recursos específicamente locales para el código ${z}. Mostrando recursos estatales que pueden servir a tu área.`);
  renderResources();
  document.getElementById("resources").scrollIntoView({behavior:"smooth",block:"start"});
}
function renderResources(){
  const q=document.getElementById("search").value.trim().toLowerCase(),free=document.getElementById("freeFilter").checked,es=document.getElementById("spanishFilter").checked,statewide=document.getElementById("statewideFilter")?.checked||false;
  let f=resources.filter(r=>{
    if(currentCategory!=="all"&&r.category!==currentCategory)return false;
    if(free&&!r.free)return false;
    if(es&&!r.spanish)return false;
    const hay=[r.name.en,r.name.es,r.description.en,r.description.es,r.location,r.category,r.access.en,r.access.es,r.eligibility.en,r.eligibility.es,r.documents.en,r.documents.es].join(" ").toLowerCase();
    return !q||hay.includes(q);
  });
  if(currentZip){
    const local=f.filter(r=>resourceMatchesZip(r,currentZip));
    const statewideResources=f.filter(r=>isStatewideResource(r));
    // ZIP search is a real filter: local results are shown first. Statewide
    // programs are optional, with an automatic fallback only when there are
    // no local listings in the selected category/search.
    if(local.length){
      f=statewide ? local.concat(statewideResources.filter(r=>!local.includes(r))) : local;
    }else{
      f=statewideResources;
    }
    f.sort((a,b)=>zipMatchScore(a,currentZip)-zipMatchScore(b,currentZip)||a.id-b.id);
  } else {
    f.sort((a,b)=>a.id-b.id);
  }
  document.getElementById("resources").innerHTML=f.map(createResourceCard).join("");
  document.getElementById("noResults").classList.toggle("hidden",f.length!==0);
  updateResultCount(f.length);
}
function createResourceCard(r){
  const l=currentLanguage,w=normalizeURL(r.website),d=createDirectionsURL(r),phone=r.phone&&r.phone!=="Check website"?`<a class="phone-link" href="${phoneHref(r.phone)}">${escapeHTML(r.phone)}</a>`:escapeHTML(r.phone);
  const local=currentZip&&resourceMatchesZip(r,currentZip);
  const near=local?`<span class="badge green">${l==="en"?"Matches your ZIP":"Coincide con tu código postal"}</span>`:"";
  return `<article class="resource-card ${local?"zip-match":""}" data-resource-id="${r.id}"><div class="card-top"><div><div class="category-label">${escapeHTML(categoryLabels[l][r.category])}</div><h3>${escapeHTML(r.name[l])}</h3></div><div class="badges">${r.free?`<span class="badge blue">${l==="en"?"Free / low-cost":"Gratis / bajo costo"}</span>`:""}${r.spanish?`<span class="badge">${l==="en"?"Spanish available":"Español disponible"}</span>`:""}${near}</div></div><p class="resource-description">${escapeHTML(r.description[l])}</p><div class="details"><div class="detail"><strong>${l==="en"?"Location":"Ubicación"}</strong><span>${escapeHTML(r.location)}</span></div><div class="detail"><strong>${l==="en"?"Phone":"Teléfono"}</strong><span>${phone}</span></div><div class="detail"><strong>${l==="en"?"Hours":"Horario"}</strong><span>${escapeHTML(r.hours)}</span></div><div class="detail"><strong>${l==="en"?"Cost":"Costo"}</strong><span>${escapeHTML(r.cost)}</span></div><div class="detail"><strong>${l==="en"?"Languages":"Idiomas"}</strong><span>${escapeHTML(r.languages)}</span></div></div><div class="access-box"><strong>${l==="en"?"How to access":"Cómo acceder"}</strong><p>${escapeHTML(r.access[l])}</p><p style="margin-top:7px"><b>${l==="en"?"Eligibility":"Requisitos"}:</b> ${escapeHTML(r.eligibility[l])}</p><p style="margin-top:7px"><b>${l==="en"?"Documents":"Documentos"}:</b> ${escapeHTML(r.documents[l])}</p></div><div class="card-actions"><a class="visit" href="${w}" target="_blank" rel="noopener noreferrer">${l==="en"?"Visit website":"Visitar sitio"} ↗</a><a class="directions" href="${d}" target="_blank" rel="noopener noreferrer">${l==="en"?"Directions":"Direcciones"} ↗</a></div></article>`;
}
function updateResultCount(n){
  const el=document.getElementById("resultCount");
  el.textContent=currentZip
    ? (currentLanguage==="en"?`Showing ${n} resources for ZIP ${currentZip}`:`Mostrando ${n} recursos para el código ${currentZip}`)
    : (currentLanguage==="en"?`Showing ${n} of ${resources.length} resources`:`Mostrando ${n} de ${resources.length} recursos`);
}
function clearFilters(){document.getElementById("search").value="";document.getElementById("zipCode").value="";document.getElementById("freeFilter").checked=false;document.getElementById("spanishFilter").checked=false;document.getElementById("statewideFilter").checked=false;currentZip="";currentCategory="all";document.querySelectorAll(".category-button").forEach(b=>b.classList.remove("active"));const all=[...document.querySelectorAll(".category-button")].find(b=>b.getAttribute("onclick")?.includes("setCategory('all'"));if(all)all.classList.add("active");document.getElementById("zipMessage").textContent="";renderResources();}
function toggleLanguage(){currentLanguage=currentLanguage==="en"?"es":"en";updateLanguage();renderResources();}
function updateLanguage(){document.querySelectorAll("[data-en][data-es]").forEach(e=>e.textContent=e.dataset[currentLanguage]);const s=document.getElementById("search");s.placeholder=currentLanguage==="en"?s.dataset.placeholderEn:s.dataset.placeholderEs;document.getElementById("languageButton").textContent=currentLanguage==="en"?"Español":"English";if(currentZip)document.getElementById("zipMessage").textContent=currentLanguage==="en"?`Showing resources serving ${getZipArea(currentZip)} for ZIP ${currentZip}. Statewide programs are available below when applicable.`:`Mostrando recursos que sirven a ${getZipArea(currentZip)} para el código ${currentZip}. Los programas estatales aparecen abajo cuando corresponde.`;}
function openHelper(){document.getElementById("helperModal").classList.remove("hidden");document.body.style.overflow="hidden";document.querySelector(".modal-close")?.focus();}
function closeHelper(){document.getElementById("helperModal").classList.add("hidden");document.body.style.overflow="";}
function helperCategory(c){closeHelper();const b=[...document.querySelectorAll(".category-button")].find(x=>x.getAttribute("onclick")?.includes(`'${c}'`));setCategory(c,b);document.getElementById("resources").scrollIntoView({behavior:"smooth",block:"start"});}
document.addEventListener("DOMContentLoaded",()=>{document.getElementById("helperModal")?.addEventListener("click",e=>{if(e.target.id==="helperModal")closeHelper();});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeHelper();if(e.key==="Enter"&&document.activeElement?.id==="zipCode")findByZip();});document.getElementById("totalResources").textContent=resources.length;updateLanguage();renderResources();});
