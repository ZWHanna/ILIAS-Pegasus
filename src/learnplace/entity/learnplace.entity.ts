import {LocationEntity} from "./location.entity";
import {MapEntity} from "./map.entity";
import {
  Entity, JoinColumnOptions, JoinTable, JoinTableOptions, ManyToMany, OneToMany, OneToOne, PrimaryColumn,
  RelationOptions
} from "typeorm";
import {TextblockEntity} from "./textblock.entity";
import {PictureBlockEntity} from "./pictureBlock.entity";
import {LinkblockEntity} from "./linkblock.entity";
import {VideoBlockEntity} from "./videoblock.entity";
import {VisitJournalEntity} from "./visit-journal.entity";
import {AccordionEntity} from "./accordion.entity";

@Entity("Learnplace")
export class LearnplaceEntity {

  @PrimaryColumn()
  objectId: number;

  @OneToOne(type => LocationEntity, location => location.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  location: LocationEntity;

  @OneToOne(type => MapEntity, map => map.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  map: MapEntity;

  @OneToMany(type => VisitJournalEntity, visitJournal => visitJournal.learnplace, <RelationOptions>{cascadeAll: true, eager: true})
  visitJournal: Array<VisitJournalEntity>;

  @ManyToMany(type => AccordionEntity, <RelationOptions>{
    cascadeInsert: true,
    cascadeUpdate: true,
    eager: true
  })
  @JoinTable(<JoinTableOptions>{
    name: "learnplace_accordion",
    joinColumn: <JoinColumnOptions>{
      name: "learnplaceId",
      referencedColumnName: "objectId"
    },
    inverseJoinColumn: <JoinColumnOptions>{
      name: "accordionId",
      referencedColumnName: "id"
    }
  })
  accordionBlocks: Array<AccordionEntity>;

  @ManyToMany(type => TextblockEntity, <RelationOptions>{
    cascadeInsert: true,
    cascadeUpdate: true,
    eager: true
  })
  @JoinTable(<JoinTableOptions>{
    name: "learnplace_textblock",
    joinColumn: <JoinColumnOptions>{
      name: "learnplaceId",
      referencedColumnName: "objectId"
    },
    inverseJoinColumn: <JoinColumnOptions>{
      name: "textblockId",
      referencedColumnName: "id"
    }
  })
  textBlocks: Array<TextblockEntity>;

  @ManyToMany(type => PictureBlockEntity, <RelationOptions>{
    cascadeInsert: true,
    cascadeUpdate: true,
    eager: true
  })
  @JoinTable(<JoinTableOptions>{
    name: "learnplace_pictureblock",
    joinColumn: <JoinColumnOptions>{
      name: "learnplaceId",
      referencedColumnName: "objectId"
    },
    inverseJoinColumn: <JoinColumnOptions>{
      name: "pictureblockId",
      referencedColumnName: "id"
    }
  })
  pictureBlocks: Array<PictureBlockEntity>;


  @ManyToMany(type => LinkblockEntity, <RelationOptions>{
    cascadeInsert: true,
    cascadeUpdate: true,
    eager: true
  })
  @JoinTable(<JoinTableOptions>{
    name: "learnplace_linkblock",
    joinColumn: <JoinColumnOptions>{
      name: "learnplaceId",
      referencedColumnName: "objectId"
    },
    inverseJoinColumn: <JoinColumnOptions>{
      name: "linkblockId",
      referencedColumnName: "id"
    }
  })
  linkBlocks: Array<LinkblockEntity>;


  @ManyToMany(type => VideoBlockEntity, <RelationOptions>{
    cascadeInsert: true,
    cascadeUpdate: true,
    eager: true
  })
  @JoinTable(<JoinTableOptions>{
    name: "learnplace_videoblock",
    joinColumn: <JoinColumnOptions>{
      name: "learnplaceId",
      referencedColumnName: "objectId"
    },
    inverseJoinColumn: <JoinColumnOptions>{
      name: "videoblockId",
      referencedColumnName: "id"
    }
  })
  videoBlocks: Array<VideoBlockEntity>;
}
