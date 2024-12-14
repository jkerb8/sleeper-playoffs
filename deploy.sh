#!/usr/bin/env bash

function deploySite() {
    destination=$1
    distribution=$2
    environment=$3
    options=$4
    profile=$5
    echo "Preparing deployment to $environment ($destination / $distribution)"

    echo "Building distribution..."
    BUILD_OUTPUT="$(ng build $options)"
    
    echo "Copying files to $destination..."
    aws s3 sync dist/sleeper-playoffs/. $destination $profile
    
    # echo "Invalidating CloudFront cache..."
    # aws cloudfront create-invalidation --distribution-id $distribution --paths "/*" $profile

    echo "Deployment complete!"
}

deploy_env=$1
aws_profile="--profile qwikcut"

# Check for AWS profile paramter and notify user if used
if [[ ! -z $2 ]]
then
    aws_profile="--profile $2"
    echo "AWS Profile set to $aws_profile."
else
    echo "AWS Profile not used."
fi

#Prod Deploy
prod_destination="s3://sleeper-leaderboard"
prod_distribution="EIMFTJWL072C5"
prod_options="--configuration production"

deploySite "$prod_destination" "$prod_distribution" "PRODUCTION" "$prod_options" "$aws_profile"
