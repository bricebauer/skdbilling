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
    define(['ApiClient', 'model/MarketplacePropertiesV3'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MarketplacePropertiesV3'));
  } else {
    // Browser globals (root is window)
    if (!root.EnterpriseReportingV3ApIsPreview) {
      root.EnterpriseReportingV3ApIsPreview = {};
    }
    root.EnterpriseReportingV3ApIsPreview.MarketplacesV3Api = factory(root.EnterpriseReportingV3ApIsPreview.ApiClient, root.EnterpriseReportingV3ApIsPreview.MarketplacePropertiesV3);
  }
}(this, function(ApiClient, MarketplacePropertiesV3) {
  'use strict';

  /**
   * MarketplacesV3 service.
   * @module api/MarketplacesV3Api
   * @version v3
   */

  /**
   * Constructs a new MarketplacesV3Api. 
   * @alias module:api/MarketplacesV3Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the marketplacesV3GetMarketplaces operation.
     * @callback module:api/MarketplacesV3Api~marketplacesV3GetMarketplacesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarketplacePropertiesV3>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the marketplace charges by custom date range.
     * @param {String} authorization Specify the value in this format: \&quot;bearer {API_KEY}\&quot;
     * @param {String} enrollmentNumber The enrollment number
     * @param {Date} startTime The start time of the date range
     * @param {Date} endTime The end time of the date range
     * @param {module:api/MarketplacesV3Api~marketplacesV3GetMarketplacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarketplacePropertiesV3>}
     */
    this.marketplacesV3GetMarketplaces = function(authorization, enrollmentNumber, startTime, endTime, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling marketplacesV3GetMarketplaces");
      }

      // verify the required parameter 'enrollmentNumber' is set
      if (enrollmentNumber === undefined || enrollmentNumber === null) {
        throw new Error("Missing the required parameter 'enrollmentNumber' when calling marketplacesV3GetMarketplaces");
      }

      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling marketplacesV3GetMarketplaces");
      }

      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling marketplacesV3GetMarketplaces");
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
      var returnType = [MarketplacePropertiesV3];

      return this.apiClient.callApi(
        '/v3/enrollments/{enrollmentNumber}/marketplacechargesbycustomdate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the marketplacesV3GetMarketplaces_0 operation.
     * @callback module:api/MarketplacesV3Api~marketplacesV3GetMarketplaces_0Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarketplacePropertiesV3>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the marketplace charges for the current billing period.
     * @param {String} authorization Specify the value in this format: \&quot;bearer {API_KEY}\&quot;
     * @param {String} enrollmentNumber The enrollment number
     * @param {module:api/MarketplacesV3Api~marketplacesV3GetMarketplaces_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarketplacePropertiesV3>}
     */
    this.marketplacesV3GetMarketplaces_0 = function(authorization, enrollmentNumber, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling marketplacesV3GetMarketplaces_0");
      }

      // verify the required parameter 'enrollmentNumber' is set
      if (enrollmentNumber === undefined || enrollmentNumber === null) {
        throw new Error("Missing the required parameter 'enrollmentNumber' when calling marketplacesV3GetMarketplaces_0");
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
      var returnType = [MarketplacePropertiesV3];

      return this.apiClient.callApi(
        '/v3/enrollments/{enrollmentNumber}/marketplacecharges', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the marketplacesV3GetMarketplaces_1 operation.
     * @callback module:api/MarketplacesV3Api~marketplacesV3GetMarketplaces_1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MarketplacePropertiesV3>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the marketplace charges for the provided billing period.
     * @param {String} authorization Specify the value in this format: \&quot;bearer {API_KEY}\&quot;
     * @param {String} enrollmentNumber The enrollment number
     * @param {String} billingPeriod The billing period id
     * @param {module:api/MarketplacesV3Api~marketplacesV3GetMarketplaces_1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MarketplacePropertiesV3>}
     */
    this.marketplacesV3GetMarketplaces_1 = function(authorization, enrollmentNumber, billingPeriod, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling marketplacesV3GetMarketplaces_1");
      }

      // verify the required parameter 'enrollmentNumber' is set
      if (enrollmentNumber === undefined || enrollmentNumber === null) {
        throw new Error("Missing the required parameter 'enrollmentNumber' when calling marketplacesV3GetMarketplaces_1");
      }

      // verify the required parameter 'billingPeriod' is set
      if (billingPeriod === undefined || billingPeriod === null) {
        throw new Error("Missing the required parameter 'billingPeriod' when calling marketplacesV3GetMarketplaces_1");
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
      var returnType = [MarketplacePropertiesV3];

      return this.apiClient.callApi(
        '/v3/enrollments/{enrollmentNumber}/billingperiods/{billingPeriod}/marketplacecharges', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
