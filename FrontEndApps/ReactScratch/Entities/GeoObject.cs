using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactScratch.Entities
{
    public class GeoObject
    {
        public int GeoObjectId { get; set; }

        public string Name { get; set; }

        public int ParentId { get; set; }

        public string ImageUrl { get; set; }

        public string Description { get; set; }
    }
}
