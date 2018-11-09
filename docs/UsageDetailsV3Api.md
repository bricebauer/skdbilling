# EnterpriseReportingV3ApIsPreview.UsageDetailsV3Api

All URIs are relative to *https://consumption.azure.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usageDetailsV3Get**](UsageDetailsV3Api.md#usageDetailsV3Get) | **GET** /v3/enrollments/{enrollmentNumber}/usagedetailsbycustomdate | Gets the usage details by custom date range
[**usageDetailsV3GetByBillingPeriod**](UsageDetailsV3Api.md#usageDetailsV3GetByBillingPeriod) | **GET** /v3/enrollments/{enrollmentNumber}/billingPeriods/{billingPeriod}/usagedetails | Gets the usage details by billing period.
[**usageDetailsV3GetByCurrentBillingPeriod**](UsageDetailsV3Api.md#usageDetailsV3GetByCurrentBillingPeriod) | **GET** /v3/enrollments/{enrollmentNumber}/usagedetails | Gets the usage details by current billing period.


<a name="usageDetailsV3Get"></a>
# **usageDetailsV3Get**
> PagedJsonDataTitaniumJuly usageDetailsV3Get(authorization, enrollmentNumber, startTime, endTime)

Gets the usage details by custom date range

### Example
```javascript
var EnterpriseReportingV3ApIsPreview = require('enterprise_reporting_v3_ap_is__preview');

var apiInstance = new EnterpriseReportingV3ApIsPreview.UsageDetailsV3Api();

var authorization = "authorization_example"; // String | Specify the value in this format: \"bearer {API_KEY}\"

var enrollmentNumber = "enrollmentNumber_example"; // String | The enrollment number.

var startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | The start time

var endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | The end time


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usageDetailsV3Get(authorization, enrollmentNumber, startTime, endTime, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Specify the value in this format: \&quot;bearer {API_KEY}\&quot; | 
 **enrollmentNumber** | **String**| The enrollment number. | 
 **startTime** | **Date**| The start time | 
 **endTime** | **Date**| The end time | 

### Return type

[**PagedJsonDataTitaniumJuly**](PagedJsonDataTitaniumJuly.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="usageDetailsV3GetByBillingPeriod"></a>
# **usageDetailsV3GetByBillingPeriod**
> PagedJsonDataTitaniumJuly usageDetailsV3GetByBillingPeriod(authorization, enrollmentNumber, billingPeriod)

Gets the usage details by billing period.

### Example
```javascript
var EnterpriseReportingV3ApIsPreview = require('enterprise_reporting_v3_ap_is__preview');

var apiInstance = new EnterpriseReportingV3ApIsPreview.UsageDetailsV3Api();

var authorization = "authorization_example"; // String | Specify the value in this format: \"bearer {API_KEY}\"

var enrollmentNumber = "enrollmentNumber_example"; // String | The enrollment number.

var billingPeriod = "billingPeriod_example"; // String | The billing period.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usageDetailsV3GetByBillingPeriod(authorization, enrollmentNumber, billingPeriod, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Specify the value in this format: \&quot;bearer {API_KEY}\&quot; | 
 **enrollmentNumber** | **String**| The enrollment number. | 
 **billingPeriod** | **String**| The billing period. | 

### Return type

[**PagedJsonDataTitaniumJuly**](PagedJsonDataTitaniumJuly.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="usageDetailsV3GetByCurrentBillingPeriod"></a>
# **usageDetailsV3GetByCurrentBillingPeriod**
> PagedJsonDataTitaniumJuly usageDetailsV3GetByCurrentBillingPeriod(authorization, enrollmentNumber)

Gets the usage details by current billing period.

### Example
```javascript
var EnterpriseReportingV3ApIsPreview = require('enterprise_reporting_v3_ap_is__preview');

var apiInstance = new EnterpriseReportingV3ApIsPreview.UsageDetailsV3Api();

var authorization = "authorization_example"; // String | Specify the value in this format: \"bearer {API_KEY}\"

var enrollmentNumber = "enrollmentNumber_example"; // String | The enrollment number.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usageDetailsV3GetByCurrentBillingPeriod(authorization, enrollmentNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Specify the value in this format: \&quot;bearer {API_KEY}\&quot; | 
 **enrollmentNumber** | **String**| The enrollment number. | 

### Return type

[**PagedJsonDataTitaniumJuly**](PagedJsonDataTitaniumJuly.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

