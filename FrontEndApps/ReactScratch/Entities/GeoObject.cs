using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactScratch.Entities
{
    public class GeoObject
    {
        [JsonProperty(PropertyName = "id")]
        public int GeoObjectId { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "parentId")]
        public int ParentId { get; set; }

        [JsonProperty(PropertyName = "parentGeoObejct")]
        public GeoObject ParentGeoObject { get; set; }

        [JsonProperty(PropertyName = "imageSrc")]
        public string ImageUrl { get; set; }

        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
        
        [JsonProperty(PropertyName = "childGeoObjects")]
        public List<GeoObject> ChildObjects { get; set; }
    }
}
