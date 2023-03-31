# Minimalistic Blog Template  
This is a minimal blog template utilizing headless WP as a CMS backend. Follow the steps in section Getting Started to get your application up and running 🏃  
## Getting Started  
1. Generate WP site in subdirectory /backend
2. Make sure that your CMS only have the following plugins installed:  
    * All-in-One WP Migration (default installed)
    * LiteSpeed Cache (default installed)
    * Hostinger (default installed) 
    * Redirection  
    * WordPress REST API Authentication  
3. Add the following code at the bottom of `wp-includes/functions.php`  
```php
add_filter( 'rest_url_prefix', function () {
	return 'api';
} );
```  
4. Add a redirect from /backend to https://{your_domain}/  
5. Only expose /wp/v2 in WordPress REST API Authentication  
  
**DONE! Eazy Peazy 🍋 Squeezy**