# EnterpriseReportingV3ApIsPreview.ReservedInstancesV3Api

All URIs are relative to *https://consumption.azure.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservedInstancesV3Get**](ReservedInstancesV3Api.md#reservedInstancesV3Get) | **GET** /v3/enrollments/{enrollmentNumber}/reservationcharges | Gets the reservation charges for the provided start and endDate


<a name="reservedInstancesV3Get"></a>
# **reservedInstancesV3Get**
> [RIPurchaseHistoryV3Properties] reservedInstancesV3Get(authorization, enrollmentNumber, startDate, endDate)

Gets the reservation charges for the provided start and endDate

### Example
```javascript
var EnterpriseReportingV3ApIsPreview = require('enterprise_reporting_v3_ap_is__preview');

var apiInstance = new EnterpriseReportingV3ApIsPreview.ReservedInstancesV3Api();

var authorization = "authorization_example"; // String | Specify the value in this format: \"bearer {API_KEY}\"

var enrollmentNumber = "enrollmentNumber_example"; // String | The enrollment number

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reservedInstancesV3Get(authorization, enrollmentNumber, startDate, endDate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Specify the value in this format: \&quot;bearer {API_KEY}\&quot; | 
 **enrollmentNumber** | **String**| The enrollment number | 
 **startDate** | **Date**|  | 
 **endDate** | **Date**|  | 

### Return type

[**[RIPurchaseHistoryV3Properties]**](RIPurchaseHistoryV3Properties.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

