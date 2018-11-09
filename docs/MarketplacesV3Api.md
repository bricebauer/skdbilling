# EnterpriseReportingV3ApIsPreview.MarketplacesV3Api

All URIs are relative to *https://consumption.azure.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplacesV3GetMarketplaces**](MarketplacesV3Api.md#marketplacesV3GetMarketplaces) | **GET** /v3/enrollments/{enrollmentNumber}/marketplacechargesbycustomdate | Gets the marketplace charges by custom date range.
[**marketplacesV3GetMarketplaces_0**](MarketplacesV3Api.md#marketplacesV3GetMarketplaces_0) | **GET** /v3/enrollments/{enrollmentNumber}/marketplacecharges | Gets the marketplace charges for the current billing period.
[**marketplacesV3GetMarketplaces_1**](MarketplacesV3Api.md#marketplacesV3GetMarketplaces_1) | **GET** /v3/enrollments/{enrollmentNumber}/billingperiods/{billingPeriod}/marketplacecharges | Gets the marketplace charges for the provided billing period.


<a name="marketplacesV3GetMarketplaces"></a>
# **marketplacesV3GetMarketplaces**
> [MarketplacePropertiesV3] marketplacesV3GetMarketplaces(authorization, enrollmentNumber, startTime, endTime)

Gets the marketplace charges by custom date range.

### Example
```javascript
var EnterpriseReportingV3ApIsPreview = require('enterprise_reporting_v3_ap_is__preview');

var apiInstance = new EnterpriseReportingV3ApIsPreview.MarketplacesV3Api();

var authorization = "authorization_example"; // String | Specify the value in this format: \"bearer {API_KEY}\"

var enrollmentNumber = "enrollmentNumber_example"; // String | The enrollment number

var startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | The start time of the date range

var endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | The end time of the date range


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.marketplacesV3GetMarketplaces(authorization, enrollmentNumber, startTime, endTime, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Specify the value in this format: \&quot;bearer {API_KEY}\&quot; | 
 **enrollmentNumber** | **String**| The enrollment number | 
 **startTime** | **Date**| The start time of the date range | 
 **endTime** | **Date**| The end time of the date range | 

### Return type

[**[MarketplacePropertiesV3]**](MarketplacePropertiesV3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="marketplacesV3GetMarketplaces_0"></a>
# **marketplacesV3GetMarketplaces_0**
> [MarketplacePropertiesV3] marketplacesV3GetMarketplaces_0(authorization, enrollmentNumber)

Gets the marketplace charges for the current billing period.

### Example
```javascript
var EnterpriseReportingV3ApIsPreview = require('enterprise_reporting_v3_ap_is__preview');

var apiInstance = new EnterpriseReportingV3ApIsPreview.MarketplacesV3Api();

var authorization = "authorization_example"; // String | Specify the value in this format: \"bearer {API_KEY}\"

var enrollmentNumber = "enrollmentNumber_example"; // String | The enrollment number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.marketplacesV3GetMarketplaces_0(authorization, enrollmentNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Specify the value in this format: \&quot;bearer {API_KEY}\&quot; | 
 **enrollmentNumber** | **String**| The enrollment number | 

### Return type

[**[MarketplacePropertiesV3]**](MarketplacePropertiesV3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="marketplacesV3GetMarketplaces_1"></a>
# **marketplacesV3GetMarketplaces_1**
> [MarketplacePropertiesV3] marketplacesV3GetMarketplaces_1(authorization, enrollmentNumber, billingPeriod)

Gets the marketplace charges for the provided billing period.

### Example
```javascript
var EnterpriseReportingV3ApIsPreview = require('enterprise_reporting_v3_ap_is__preview');

var apiInstance = new EnterpriseReportingV3ApIsPreview.MarketplacesV3Api();

var authorization = "authorization_example"; // String | Specify the value in this format: \"bearer {API_KEY}\"

var enrollmentNumber = "enrollmentNumber_example"; // String | The enrollment number

var billingPeriod = "billingPeriod_example"; // String | The billing period id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.marketplacesV3GetMarketplaces_1(authorization, enrollmentNumber, billingPeriod, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Specify the value in this format: \&quot;bearer {API_KEY}\&quot; | 
 **enrollmentNumber** | **String**| The enrollment number | 
 **billingPeriod** | **String**| The billing period id | 

### Return type

[**[MarketplacePropertiesV3]**](MarketplacePropertiesV3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

