# EnterpriseReportingV3ApIsPreview.PriceSheetsV3Api

All URIs are relative to *https://consumption.azure.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**priceSheetsV3Get**](PriceSheetsV3Api.md#priceSheetsV3Get) | **GET** /v3/enrollments/{enrollmentNumber}/pricesheet | Gets the price sheet for the current billing period.
[**priceSheetsV3Get_0**](PriceSheetsV3Api.md#priceSheetsV3Get_0) | **GET** /v3/enrollments/{enrollmentNumber}/billingperiods/{billingPeriod}/pricesheet | Get the price sheet for the provided billing period.


<a name="priceSheetsV3Get"></a>
# **priceSheetsV3Get**
> [PriceSheetV3] priceSheetsV3Get(authorization, enrollmentNumber)

Gets the price sheet for the current billing period.

### Example
```javascript
var EnterpriseReportingV3ApIsPreview = require('enterprise_reporting_v3_ap_is__preview');

var apiInstance = new EnterpriseReportingV3ApIsPreview.PriceSheetsV3Api();

var authorization = "authorization_example"; // String | Specify the value in this format: \"bearer {API_KEY}\"

var enrollmentNumber = "enrollmentNumber_example"; // String | The enrollment number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.priceSheetsV3Get(authorization, enrollmentNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Specify the value in this format: \&quot;bearer {API_KEY}\&quot; | 
 **enrollmentNumber** | **String**| The enrollment number | 

### Return type

[**[PriceSheetV3]**](PriceSheetV3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="priceSheetsV3Get_0"></a>
# **priceSheetsV3Get_0**
> [PriceSheetV3] priceSheetsV3Get_0(authorization, enrollmentNumber, billingPeriod)

Get the price sheet for the provided billing period.

### Example
```javascript
var EnterpriseReportingV3ApIsPreview = require('enterprise_reporting_v3_ap_is__preview');

var apiInstance = new EnterpriseReportingV3ApIsPreview.PriceSheetsV3Api();

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
apiInstance.priceSheetsV3Get_0(authorization, enrollmentNumber, billingPeriod, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Specify the value in this format: \&quot;bearer {API_KEY}\&quot; | 
 **enrollmentNumber** | **String**| The enrollment number | 
 **billingPeriod** | **String**| The billing period id | 

### Return type

[**[PriceSheetV3]**](PriceSheetV3.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

