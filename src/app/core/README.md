Contains services that app needs and cannot work without. Eg ui.service, auth.service, auth.guard , globalSetting service


authentication - Should contain all logic about user, his state, steps to login, steps to register, token refresh etc (this is usualy unique thats why its grouped);
guards-  Should contain all route guards;
service - All services that are intiated only once;