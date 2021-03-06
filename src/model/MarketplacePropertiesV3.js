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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EnterpriseReportingV3ApIsPreview) {
      root.EnterpriseReportingV3ApIsPreview = {};
    }
    root.EnterpriseReportingV3ApIsPreview.MarketplacePropertiesV3 = factory(root.EnterpriseReportingV3ApIsPreview.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MarketplacePropertiesV3 model module.
   * @module model/MarketplacePropertiesV3
   * @version v3
   */

  /**
   * Constructs a new <code>MarketplacePropertiesV3</code>.
   * @alias module:model/MarketplacePropertiesV3
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>MarketplacePropertiesV3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarketplacePropertiesV3} obj Optional instance to populate.
   * @return {module:model/MarketplacePropertiesV3} The populated <code>MarketplacePropertiesV3</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('subscriptionGuid')) {
        obj['subscriptionGuid'] = ApiClient.convertToType(data['subscriptionGuid'], 'String');
      }
      if (data.hasOwnProperty('subscriptionName')) {
        obj['subscriptionName'] = ApiClient.convertToType(data['subscriptionName'], 'String');
      }
      if (data.hasOwnProperty('meterId')) {
        obj['meterId'] = ApiClient.convertToType(data['meterId'], 'String');
      }
      if (data.hasOwnProperty('usageStartDate')) {
        obj['usageStartDate'] = ApiClient.convertToType(data['usageStartDate'], 'Date');
      }
      if (data.hasOwnProperty('usageEndDate')) {
        obj['usageEndDate'] = ApiClient.convertToType(data['usageEndDate'], 'Date');
      }
      if (data.hasOwnProperty('offerName')) {
        obj['offerName'] = ApiClient.convertToType(data['offerName'], 'String');
      }
      if (data.hasOwnProperty('resourceGroup')) {
        obj['resourceGroup'] = ApiClient.convertToType(data['resourceGroup'], 'String');
      }
      if (data.hasOwnProperty('instanceId')) {
        obj['instanceId'] = ApiClient.convertToType(data['instanceId'], 'String');
      }
      if (data.hasOwnProperty('additionalInfo')) {
        obj['additionalInfo'] = ApiClient.convertToType(data['additionalInfo'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], 'String');
      }
      if (data.hasOwnProperty('orderNumber')) {
        obj['orderNumber'] = ApiClient.convertToType(data['orderNumber'], 'String');
      }
      if (data.hasOwnProperty('unitOfMeasure')) {
        obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
      }
      if (data.hasOwnProperty('costCenter')) {
        obj['costCenter'] = ApiClient.convertToType(data['costCenter'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
      }
      if (data.hasOwnProperty('accountName')) {
        obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
      }
      if (data.hasOwnProperty('accountOwnerId')) {
        obj['accountOwnerId'] = ApiClient.convertToType(data['accountOwnerId'], 'String');
      }
      if (data.hasOwnProperty('departmentId')) {
        obj['departmentId'] = ApiClient.convertToType(data['departmentId'], 'Number');
      }
      if (data.hasOwnProperty('departmentName')) {
        obj['departmentName'] = ApiClient.convertToType(data['departmentName'], 'String');
      }
      if (data.hasOwnProperty('publisherName')) {
        obj['publisherName'] = ApiClient.convertToType(data['publisherName'], 'String');
      }
      if (data.hasOwnProperty('planName')) {
        obj['planName'] = ApiClient.convertToType(data['planName'], 'String');
      }
      if (data.hasOwnProperty('consumedQuantity')) {
        obj['consumedQuantity'] = ApiClient.convertToType(data['consumedQuantity'], 'Number');
      }
      if (data.hasOwnProperty('resourceRate')) {
        obj['resourceRate'] = ApiClient.convertToType(data['resourceRate'], 'Number');
      }
      if (data.hasOwnProperty('extendedCost')) {
        obj['extendedCost'] = ApiClient.convertToType(data['extendedCost'], 'Number');
      }
      if (data.hasOwnProperty('isRecurringCharge')) {
        obj['isRecurringCharge'] = ApiClient.convertToType(data['isRecurringCharge'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} subscriptionGuid
   */
  exports.prototype['subscriptionGuid'] = undefined;
  /**
   * @member {String} subscriptionName
   */
  exports.prototype['subscriptionName'] = undefined;
  /**
   * @member {String} meterId
   */
  exports.prototype['meterId'] = undefined;
  /**
   * @member {Date} usageStartDate
   */
  exports.prototype['usageStartDate'] = undefined;
  /**
   * @member {Date} usageEndDate
   */
  exports.prototype['usageEndDate'] = undefined;
  /**
   * @member {String} offerName
   */
  exports.prototype['offerName'] = undefined;
  /**
   * @member {String} resourceGroup
   */
  exports.prototype['resourceGroup'] = undefined;
  /**
   * @member {String} instanceId
   */
  exports.prototype['instanceId'] = undefined;
  /**
   * @member {String} additionalInfo
   */
  exports.prototype['additionalInfo'] = undefined;
  /**
   * @member {String} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {String} orderNumber
   */
  exports.prototype['orderNumber'] = undefined;
  /**
   * @member {String} unitOfMeasure
   */
  exports.prototype['unitOfMeasure'] = undefined;
  /**
   * @member {String} costCenter
   */
  exports.prototype['costCenter'] = undefined;
  /**
   * @member {Number} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {String} accountName
   */
  exports.prototype['accountName'] = undefined;
  /**
   * @member {String} accountOwnerId
   */
  exports.prototype['accountOwnerId'] = undefined;
  /**
   * @member {Number} departmentId
   */
  exports.prototype['departmentId'] = undefined;
  /**
   * @member {String} departmentName
   */
  exports.prototype['departmentName'] = undefined;
  /**
   * @member {String} publisherName
   */
  exports.prototype['publisherName'] = undefined;
  /**
   * @member {String} planName
   */
  exports.prototype['planName'] = undefined;
  /**
   * @member {Number} consumedQuantity
   */
  exports.prototype['consumedQuantity'] = undefined;
  /**
   * @member {Number} resourceRate
   */
  exports.prototype['resourceRate'] = undefined;
  /**
   * @member {Number} extendedCost
   */
  exports.prototype['extendedCost'] = undefined;
  /**
   * @member {Boolean} isRecurringCharge
   */
  exports.prototype['isRecurringCharge'] = undefined;



  return exports;
}));


