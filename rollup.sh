echo "******************************************"
echo "build start"
echo "******************************************"
echo ""
echo ""

ENV_PRO=$1

Path=`pwd`;
PackagesPath=${Path}/packages;
PackagesList=$(ls $PackagesPath);
for PackageName in $PackagesList
do
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
echo "building " ${PackageName}
PackagePath=${PackagesPath}/${PackageName}
cd ${PackagePath}
yarn rollup --env ${ENV_PRO}
cd ..
done
echo ""
echo ""
echo "******************************************"
echo "build finished"
echo "******************************************"