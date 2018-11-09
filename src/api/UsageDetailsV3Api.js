/**
 * Enterprise Reporting v3 APIs (preview)
 * The Reporting APIs enable Enterprise Azure customers to programmatically pull consumption and billing data into preferred data analysis tools. Generate API Key on Enterprise portal and follow the tutorial under Help - Reporting APIs. The first section under this help article explains how to generate\\retrieve the API key for the specified enrollment. <a href=\"https://docs.microsoft.com/en-us/azure/billing/billing-enterprise-api\" data-linktype=\"external\">Billing Enterprise API official documentation</a>
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PagedJsonDataTitaniumJuly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PagedJsonDataTitaniumJuly'));
  } else {
    // Browser globals (root is window)
    if (!root.EnterpriseReportingV3ApIsPreview) {
      root.EnterpriseReportingV3ApIsPreview = {};
    }
    root.EnterpriseReportingV3ApIsPreview.UsageDetailsV3Api = factory(root.EnterpriseReportingV3ApIsPreview.ApiClient, root.EnterpriseReportingV3ApIsPreview.PagedJsonDataTitaniumJuly);
  }
}(this, function(ApiClient, PagedJsonDataTitaniumJuly) {
  'use strict';

  /**
   * UsageDetailsV3 service.
   * @module api/UsageDetailsV3Api
   * @version v3
   */

  /**
   * Constructs a new UsageDetailsV3Api. 
   * @alias module:api/UsageDetailsV3Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the usageDetailsV3Get operation.
     * @callback module:api/UsageDetailsV3Api~usageDetailsV3GetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedJsonDataTitaniumJuly} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the usage details by custom date range
     * @param {String} authorization Specify the value in this format: \&quot;bearer {API_KEY}\&quot;
     * @param {String} enrollmentNumber The enrollment number.
     * @param {Date} startTime The start time
     * @param {Date} endTime The end time
     * @param {module:api/UsageDetailsV3Api~usageDetailsV3GetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedJsonDataTitaniumJuly}
     */
    this.usageDetailsV3Get = function(authorization, enrollmentNumber, startTime, endTime, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling usageDetailsV3Get");
      }

      // verify the required parameter 'enrollmentNumber' is set
      if (enrollmentNumber === undefined || enrollmentNumber === null) {
        throw new Error("Missing the required parameter 'enrollmentNumber' when calling usageDetailsV3Get");
      }

      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling usageDetailsV3Get");
      }

      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling usageDetailsV3Get");
      }


      var pathParams = {
        'enrollmentNumber': enrollmentNumber
      };
      var queryParams = {
        'startTime': startTime,
        'endTime': endTime,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = PagedJsonDataTitaniumJuly;

      return this.apiClient.callApi(
        '/v3/enrollments/{enrollmentNumber}/usagedetailsbycustomdate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usageDetailsV3GetByBillingPeriod operation.
     * @callback module:api/UsageDetailsV3Api~usageDetailsV3GetByBillingPeriodCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedJsonDataTitaniumJuly} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the usage details by billing period.
     * @param {String} authorization Specify the value in this format: \&quot;bearer {API_KEY}\&quot;
     * @param {String} enrollmentNumber The enrollment number.
     * @param {String} billingPeriod The billing period.
     * @param {module:api/UsageDetailsV3Api~usageDetailsV3GetByBillingPeriodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedJsonDataTitaniumJuly}
     */
    this.usageDetailsV3GetByBillingPeriod = function(authorization, enrollmentNumber, billingPeriod, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling usageDetailsV3GetByBillingPeriod");
      }

      // verify the required parameter 'enrollmentNumber' is set
      if (enrollmentNumber === undefined || enrollmentNumber === null) {
        throw new Error("Missing the required parameter 'enrollmentNumber' when calling usageDetailsV3GetByBillingPeriod");
      }

      // verify the required parameter 'billingPeriod' is set
      if (billingPeriod === undefined || billingPeriod === null) {
        throw new Error("Missing the required parameter 'billingPeriod' when calling usageDetailsV3GetByBillingPeriod");
      }


      var pathParams = {
        'enrollmentNumber': enrollmentNumber,
        'billingPeriod': billingPeriod
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = PagedJsonDataTitaniumJuly;

      return this.apiClient.callApi(
        '/v3/enrollments/{enrollmentNumber}/billingPeriods/{billingPeriod}/usagedetails', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usageDetailsV3GetByCurrentBillingPeriod operation.
     * @callback module:api/UsageDetailsV3Api~usageDetailsV3GetByCurrentBillingPeriodCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedJsonDataTitaniumJuly} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the usage details by current billing period.
     * @param {String} authorization Specify the value in this format: \&quot;bearer {API_KEY}\&quot;
     * @param {String} enrollmentNumber The enrollment number.
     * @param {module:api/UsageDetailsV3Api~usageDetailsV3GetByCurrentBillingPeriodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedJsonDataTitaniumJuly}
     */
    this.usageDetailsV3GetByCurrentBillingPeriod = function(authorization, enrollmentNumber, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling usageDetailsV3GetByCurrentBillingPeriod");
      }

      // verify the required parameter 'enrollmentNumber' is set
      if (enrollmentNumber === undefined || enrollmentNumber === null) {
        throw new Error("Missing the required parameter 'enrollmentNumber' when calling usageDetailsV3GetByCurrentBillingPeriod");
      }


      var pathParams = {
        'enrollmentNumber': enrollmentNumber
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = PagedJsonDataTitaniumJuly;

      return this.apiClient.callApi(
        '/v3/enrollments/{enrollmentNumber}/usagedetails', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
