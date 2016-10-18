using ReactScratch.Models;
using ReactScratch.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
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

                var queryResult = geoObjectTable
                                    .Where(go => go.Name.ToLower() == tag.ToLower())
                                    .FirstOrDefault();

                if(queryResult != null)
                {
                    var result = queryResult.Convert();

                    result.parentGeoObejct = geoObjectTable
                                                .Where(go => go.GeoObjectId == queryResult.ParentId)
                                                .FirstOrDefault()?
                                                .Convert();

                    result.childGeoObjects = new List<SearchResult>();
                    geoObjectTable
                        .Where(go => go.ParentId == result.id)?.ToList()?
                        .ForEach(record =>
                        {
                            result.childGeoObjects.Add(record.Convert());
                        });

                    return Json(result, JsonRequestBehavior.AllowGet);
                }                
            }
            return Json(new { }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult AutoCompletion(string tag)
        {
            var geoObjectTable = _geoObjectRepository.Get().Result;

            var results = tag != null ? 
                            geoObjectTable
                                .Where(go => go.Name.ToLower().Contains(tag.ToLower())) : 
                            null;

            return Json(results, JsonRequestBehavior.AllowGet);
        }
    }
}