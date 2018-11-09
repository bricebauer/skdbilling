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
    define(['ApiClient', 'model/UsageDetailsDeNormalizedTitaniumJuly'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsageDetailsDeNormalizedTitaniumJuly'));
  } else {
    // Browser globals (root is window)
    if (!root.EnterpriseReportingV3ApIsPreview) {
      root.EnterpriseReportingV3ApIsPreview = {};
    }
    root.EnterpriseReportingV3ApIsPreview.PagedJsonDataTitaniumJuly = factory(root.EnterpriseReportingV3ApIsPreview.ApiClient, root.EnterpriseReportingV3ApIsPreview.UsageDetailsDeNormalizedTitaniumJuly);
  }
}(this, function(ApiClient, UsageDetailsDeNormalizedTitaniumJuly) {
  'use strict';




  /**
   * The PagedJsonDataTitaniumJuly model module.
   * @module model/PagedJsonDataTitaniumJuly
   * @version v3
   */

  /**
   * Constructs a new <code>PagedJsonDataTitaniumJuly</code>.
   * @alias module:model/PagedJsonDataTitaniumJuly
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PagedJsonDataTitaniumJuly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PagedJsonDataTitaniumJuly} obj Optional instance to populate.
   * @return {module:model/PagedJsonDataTitaniumJuly} The populated <code>PagedJsonDataTitaniumJuly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [UsageDetailsDeNormalizedTitaniumJuly]);
      }
      if (data.hasOwnProperty('nextLink')) {
        obj['nextLink'] = ApiClient.convertToType(data['nextLink'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:model/UsageDetailsDeNormalizedTitaniumJuly>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {String} nextLink
   */
  exports.prototype['nextLink'] = undefined;



  return exports;
}));


