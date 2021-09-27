<?php

/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
namespace Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting;

class Activity extends \Google\Site_Kit_Dependencies\Google\Collection
{
    protected $collection_key = 'customDimension';
    public $activityTime;
    public $activityType;
    protected $appviewType = \Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\ScreenviewData::class;
    protected $appviewDataType = '';
    public $campaign;
    public $channelGrouping;
    protected $customDimensionType = \Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\CustomDimension::class;
    protected $customDimensionDataType = 'array';
    protected $ecommerceType = \Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\EcommerceData::class;
    protected $ecommerceDataType = '';
    protected $eventType = \Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\EventData::class;
    protected $eventDataType = '';
    protected $goalsType = \Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\GoalSetData::class;
    protected $goalsDataType = '';
    public $hostname;
    public $keyword;
    public $landingPagePath;
    public $medium;
    protected $pageviewType = \Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\PageviewData::class;
    protected $pageviewDataType = '';
    public $source;
    public function setActivityTime($activityTime)
    {
        $this->activityTime = $activityTime;
    }
    public function getActivityTime()
    {
        return $this->activityTime;
    }
    public function setActivityType($activityType)
    {
        $this->activityType = $activityType;
    }
    public function getActivityType()
    {
        return $this->activityType;
    }
    /**
     * @param ScreenviewData
     */
    public function setAppview(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\ScreenviewData $appview)
    {
        $this->appview = $appview;
    }
    /**
     * @return ScreenviewData
     */
    public function getAppview()
    {
        return $this->appview;
    }
    public function setCampaign($campaign)
    {
        $this->campaign = $campaign;
    }
    public function getCampaign()
    {
        return $this->campaign;
    }
    public function setChannelGrouping($channelGrouping)
    {
        $this->channelGrouping = $channelGrouping;
    }
    public function getChannelGrouping()
    {
        return $this->channelGrouping;
    }
    /**
     * @param CustomDimension[]
     */
    public function setCustomDimension($customDimension)
    {
        $this->customDimension = $customDimension;
    }
    /**
     * @return CustomDimension[]
     */
    public function getCustomDimension()
    {
        return $this->customDimension;
    }
    /**
     * @param EcommerceData
     */
    public function setEcommerce(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\EcommerceData $ecommerce)
    {
        $this->ecommerce = $ecommerce;
    }
    /**
     * @return EcommerceData
     */
    public function getEcommerce()
    {
        return $this->ecommerce;
    }
    /**
     * @param EventData
     */
    public function setEvent(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\EventData $event)
    {
        $this->event = $event;
    }
    /**
     * @return EventData
     */
    public function getEvent()
    {
        return $this->event;
    }
    /**
     * @param GoalSetData
     */
    public function setGoals(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\GoalSetData $goals)
    {
        $this->goals = $goals;
    }
    /**
     * @return GoalSetData
     */
    public function getGoals()
    {
        return $this->goals;
    }
    public function setHostname($hostname)
    {
        $this->hostname = $hostname;
    }
    public function getHostname()
    {
        return $this->hostname;
    }
    public function setKeyword($keyword)
    {
        $this->keyword = $keyword;
    }
    public function getKeyword()
    {
        return $this->keyword;
    }
    public function setLandingPagePath($landingPagePath)
    {
        $this->landingPagePath = $landingPagePath;
    }
    public function getLandingPagePath()
    {
        return $this->landingPagePath;
    }
    public function setMedium($medium)
    {
        $this->medium = $medium;
    }
    public function getMedium()
    {
        return $this->medium;
    }
    /**
     * @param PageviewData
     */
    public function setPageview(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\PageviewData $pageview)
    {
        $this->pageview = $pageview;
    }
    /**
     * @return PageviewData
     */
    public function getPageview()
    {
        return $this->pageview;
    }
    public function setSource($source)
    {
        $this->source = $source;
    }
    public function getSource()
    {
        return $this->source;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\Activity::class, 'Google\\Site_Kit_Dependencies\\Google_Service_AnalyticsReporting_Activity');
