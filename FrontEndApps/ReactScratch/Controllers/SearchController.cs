using Newtonsoft.Json;
using ReactScratch.Entities;
using ReactScratch.Services;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace ReactScratch.Controllers
{
    public class SearchController : Controller
    {
        private IGeoObjectRepository _geoObjectRepository { get; set; }

        public SearchController(IGeoObjectRepository geoObjectRepository)
        {
            _geoObjectRepository = geoObjectRepository;
        }

        public ActionResult Index(string tag)
        {
            if(tag != null)
            {
                var geoObjectTable = _geoObjectRepository.Get().Result;

                var primaryResult = geoObjectTable
                                    .Where(go => go.Name.ToLower() == tag.ToLower())?
                                    .Select(go => new GeoObject() { GeoObjectId = go.GeoObjectId, Name = go.Name, ImageUrl = go.ImageUrl })
                                    .FirstOrDefault();

                if(primaryResult != null)
                {
                    var result = new List<GeoObject>();
                    var leafs = FindLeafs(primaryResult);
                    
                    return Content(JsonConvert.SerializeObject(leafs), "application/json");
                }
            }
            return Content("[]", "application/json");
        }

        protected List<GeoObject> FindLeafs(GeoObject parent)
        {
            var result = new List<GeoObject>();
            var geoObjectTable = _geoObjectRepository.Get().Result;

            var childObejcts = geoObjectTable
                                .Where(go => go.ParentId == parent.GeoObjectId)?
                                .Select(go => new GeoObject() { GeoObjectId = go.GeoObjectId, Name = go.Name, ImageUrl = go.ImageUrl })
                                .ToList();

            if (childObejcts.Any())
            {
                childObejcts
                    .ForEach(child =>
                    {
                        var leafs = FindLeafs(child);
                        leafs.ForEach(leaf => { leaf.ParentGeoObject = parent; });
                        result.AddRange(leafs);
                    });
            }
            else
            {
                result.Add(parent);
            }
                
            return result;
        }

        public ActionResult AutoCompletion(string tag)
        {
            if(tag != null)
            {
                var geoObjectTable = _geoObjectRepository.Get().Result;

                var results = geoObjectTable
                                .Where(go => go.Name.ToLower().Contains(tag.ToLower()))?
                                .Select(go => new GeoObject() { GeoObjectId = go.GeoObjectId, Name = go.Name })
                                .ToList();
                
                return Content(JsonConvert.SerializeObject(results), "application/json");
            }
            return Content("[]", "application/json");
        }

        public ActionResult GeoObject(int? id)
        {
            if (id != null)
            {
                var geoObjectTable = _geoObjectRepository.Get().Result;

                var queryResult = geoObjectTable
                                    .Where(go => go.GeoObjectId == id.Value)
                                    .FirstOrDefault();

                if (queryResult != null)
                {
                    queryResult.ParentGeoObject = geoObjectTable
                                                    .Where(go => go.GeoObjectId == queryResult.ParentId)?
                                                    .Select(go => new GeoObject() { GeoObjectId = go.GeoObjectId, Name = go.Name })
                                                    .FirstOrDefault();

                    queryResult.ChildObjects = geoObjectTable
                                                    .Where(go => go.ParentId == queryResult.GeoObjectId)?
                                                    .Select(go => new GeoObject() { GeoObjectId = go.GeoObjectId, Name = go.Name })
                                                    .ToList();

                    return Content(JsonConvert.SerializeObject(queryResult), "application/json");
                }
            }
            return Content("{}", "application/json");
        }
    }
}