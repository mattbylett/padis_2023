<?php

namespace App\Imports;

use App\Models\WebsiteId;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithUpserts;

class WebsiteIds implements ToModel, WithHeadingRow, WithUpserts, WithChunkReading, WithBatchInserts
{
    /**
     * @return string|array
     */
    public function uniqueBy()
    {
        return 'internal_id';
    }

    /**
     * @return string|array
     */
    public function chunkSize() : int
    {
        return 500;
    }
    /**
     * @return string|array
     */
    public function batchSize() : int
    {
        return 250;
    }

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model
    */
    public function model(array $row)
    {

        $id = new WebsiteId();
        $id->internal_id = $row['internal_id'];
        $id->name = $row['name'];
        $id->cafe_supplies = $row['cafe_supplies'];
        $id->car_cleaning = $row['car_cleaning'];
        $id->hand_sanitiser = $row['hand_sanitiser'];
        $id->insinc_products = $row['insinc_products'];
        $id->packnet = $row['packnet'];
        $id->rubbish_bags = $row['rubbish_bags'];
        $id->disposable_gloves = $row['disposable_gloves'];

        $id->save();

    }
}